import mysql from 'mysql2/promise';

// Create connection pool for MySQL
let pool: mysql.Pool | null = null;

function getDb() {
  if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL environment variable is not set');
  }

  if (!pool) {
    pool = mysql.createPool({
      uri: process.env.DATABASE_URL,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
      enableKeepAlive: true,
      keepAliveInitialDelay: 0,
    });
  }

  return pool;
}

// Initialize database tables
export async function initializeTables() {
  try {
    const db = getDb();
    
    // Create articles table if it doesn't exist
    await db.execute(`
      CREATE TABLE IF NOT EXISTS articles (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title TEXT NOT NULL,
        description TEXT NOT NULL,
        author VARCHAR(255) NOT NULL,
        readTime VARCHAR(50),
        date VARCHAR(50) NOT NULL,
        tag VARCHAR(100),
        type VARCHAR(50) NOT NULL DEFAULT 'article',
        youtubeId VARCHAR(255),
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        INDEX idx_type (type),
        INDEX idx_date (date)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
    `);

    console.log('Database tables initialized successfully');
  } catch (error) {
    console.error('Error initializing tables:', error);
    throw error;
  }
}

// Seed initial data from JSON files (only if table is empty)
export async function seedInitialData() {
  try {
    const db = getDb();
    
    // Check if data already exists
    const [rows] = await db.execute('SELECT COUNT(*) as count FROM articles');
    const count = (rows as any)[0].count;

    if (count > 0) {
      console.log('Database already has data, skipping seed');
      return;
    }

    console.log('Seeding initial data...');

    // Import JSON data
    const articlesData = await import('@/data/articles.json');
    const whitePapersData = await import('@/data/white-papers.json');
    const podcastsData = await import('@/data/podcasts.json');

    // Seed articles
    for (const article of articlesData.default) {
      await db.execute(
        `INSERT INTO articles (title, description, author, readTime, date, tag, type)
         VALUES (?, ?, ?, ?, ?, ?, 'article')`,
        [article.title, article.description, article.author, article.readTime, article.date, article.tag]
      );
    }
    console.log(`Seeded ${articlesData.default.length} articles`);

    // Seed white papers
    for (const paper of whitePapersData.default) {
      await db.execute(
        `INSERT INTO articles (title, description, author, readTime, date, tag, type)
         VALUES (?, ?, ?, ?, ?, ?, 'white-paper')`,
        [paper.title, paper.description, paper.author, paper.readTime, paper.date, paper.tag]
      );
    }
    console.log(`Seeded ${whitePapersData.default.length} white papers`);

    // Seed podcasts
    for (const podcast of podcastsData.default) {
      await db.execute(
        `INSERT INTO articles (title, description, author, readTime, date, tag, type, youtubeId)
         VALUES (?, ?, ?, ?, ?, ?, 'podcast', ?)`,
        [podcast.title, podcast.description, podcast.author, podcast.readTime, podcast.date, podcast.tag, podcast.youtubeId]
      );
    }
    console.log(`Seeded ${podcastsData.default.length} podcasts`);

    console.log('Initial data seeded successfully!');
  } catch (error) {
    console.error('Error seeding data:', error);
    // Don't throw error, just log it - seeding is optional
  }
}

// Database operations
export const dbOperations = {
  // Get all items by type
  getByType: async (type: 'article' | 'white-paper' | 'podcast') => {
    try {
      const db = getDb();
      const [rows] = await db.execute(
        'SELECT * FROM articles WHERE type = ? ORDER BY date DESC',
        [type]
      );
      return rows;
    } catch (error) {
      console.error('Error fetching by type:', error);
      throw error;
    }
  },

  // Get single item by ID
  getById: async (id: number) => {
    try {
      const db = getDb();
      const [rows] = await db.execute(
        'SELECT * FROM articles WHERE id = ?',
        [id]
      );
      return (rows as any[])[0] || null;
    } catch (error) {
      console.error('Error fetching by ID:', error);
      throw error;
    }
  },

  // Create new item
  create: async (data: {
    title: string;
    description: string;
    author: string;
    readTime?: string;
    date: string;
    tag?: string;
    type: 'article' | 'white-paper' | 'podcast';
    youtubeId?: string;
  }) => {
    try {
      const db = getDb();
      const [result] = await db.execute(
        `INSERT INTO articles (title, description, author, readTime, date, tag, type, youtubeId)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          data.title,
          data.description,
          data.author,
          data.readTime || '',
          data.date,
          data.tag || '',
          data.type,
          data.youtubeId || null
        ]
      );
      
      const insertId = (result as any).insertId;
      return await dbOperations.getById(insertId);
    } catch (error) {
      console.error('Error creating item:', error);
      throw error;
    }
  },

  // Update item
  update: async (
    id: number,
    data: {
      title?: string;
      description?: string;
      author?: string;
      readTime?: string;
      date?: string;
      tag?: string;
      youtubeId?: string;
    }
  ) => {
    try {
      const db = getDb();
      
      // Build dynamic update query
      const updates: string[] = [];
      const values: any[] = [];
      
      if (data.title !== undefined) {
        updates.push('title = ?');
        values.push(data.title);
      }
      if (data.description !== undefined) {
        updates.push('description = ?');
        values.push(data.description);
      }
      if (data.author !== undefined) {
        updates.push('author = ?');
        values.push(data.author);
      }
      if (data.readTime !== undefined) {
        updates.push('readTime = ?');
        values.push(data.readTime);
      }
      if (data.date !== undefined) {
        updates.push('date = ?');
        values.push(data.date);
      }
      if (data.tag !== undefined) {
        updates.push('tag = ?');
        values.push(data.tag);
      }
      if (data.youtubeId !== undefined) {
        updates.push('youtubeId = ?');
        values.push(data.youtubeId);
      }

      if (updates.length === 0) {
        return await dbOperations.getById(id);
      }

      values.push(id);

      const query = `UPDATE articles SET ${updates.join(', ')} WHERE id = ?`;
      await db.execute(query, values);
      
      return await dbOperations.getById(id);
    } catch (error) {
      console.error('Error updating item:', error);
      throw error;
    }
  },

  // Delete item
  delete: async (id: number) => {
    try {
      const db = getDb();
      const [result] = await db.execute(
        'DELETE FROM articles WHERE id = ?',
        [id]
      );
      return (result as any).affectedRows > 0;
    } catch (error) {
      console.error('Error deleting item:', error);
      throw error;
    }
  },

  // Get all items (for homepage)
  getAll: async (limit?: number) => {
    try {
      const db = getDb();
      if (limit) {
        const [rows] = await db.execute(
          'SELECT * FROM articles ORDER BY date DESC LIMIT ?',
          [limit]
        );
        return rows;
      } else {
        const [rows] = await db.execute(
          'SELECT * FROM articles ORDER BY date DESC'
        );
        return rows;
      }
    } catch (error) {
      console.error('Error fetching all items:', error);
      throw error;
    }
  },

  // Get latest items for homepage
  getLatest: async (limit: number = 6) => {
    try {
      const db = getDb();
      const [rows] = await db.execute(
        'SELECT * FROM articles ORDER BY date DESC LIMIT ?',
        [limit]
      );
      return rows;
    } catch (error) {
      console.error('Error fetching latest items:', error);
      throw error;
    }
  },
};

export default dbOperations;
