import { neon } from '@neondatabase/serverless';

// Get database connection
function getDb() {
  if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL environment variable is not set');
  }
  return neon(process.env.DATABASE_URL);
}

// Initialize database tables
export async function initializeTables() {
  try {
    const sql = getDb();
    
    // Create articles table if it doesn't exist
    await sql`
      CREATE TABLE IF NOT EXISTS articles (
        id SERIAL PRIMARY KEY,
        title TEXT NOT NULL,
        description TEXT NOT NULL,
        author TEXT NOT NULL,
        readTime TEXT,
        date TEXT NOT NULL,
        tag TEXT,
        type TEXT NOT NULL DEFAULT 'article',
        youtubeId TEXT,
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;

    // Create indexes for faster queries
    await sql`CREATE INDEX IF NOT EXISTS idx_articles_type ON articles(type)`;
    await sql`CREATE INDEX IF NOT EXISTS idx_articles_date ON articles(date)`;

    console.log('Database tables initialized successfully');
  } catch (error) {
    console.error('Error initializing tables:', error);
    throw error;
  }
}

// Seed initial data from JSON files (only if table is empty)
export async function seedInitialData() {
  try {
    const sql = getDb();
    
    // Check if data already exists
    const result = await sql`SELECT COUNT(*) as count FROM articles`;
    const count = parseInt(result[0].count);

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
      await sql`
        INSERT INTO articles (title, description, author, readTime, date, tag, type)
        VALUES (${article.title}, ${article.description}, ${article.author}, 
                ${article.readTime}, ${article.date}, ${article.tag}, 'article')
      `;
    }
    console.log(`Seeded ${articlesData.default.length} articles`);

    // Seed white papers
    for (const paper of whitePapersData.default) {
      await sql`
        INSERT INTO articles (title, description, author, readTime, date, tag, type)
        VALUES (${paper.title}, ${paper.description}, ${paper.author}, 
                ${paper.readTime}, ${paper.date}, ${paper.tag}, 'white-paper')
      `;
    }
    console.log(`Seeded ${whitePapersData.default.length} white papers`);

    // Seed podcasts
    for (const podcast of podcastsData.default) {
      await sql`
        INSERT INTO articles (title, description, author, readTime, date, tag, type, youtubeId)
        VALUES (${podcast.title}, ${podcast.description}, ${podcast.author}, 
                ${podcast.readTime}, ${podcast.date}, ${podcast.tag}, 'podcast', ${podcast.youtubeId})
      `;
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
      const sql = getDb();
      const rows = await sql`
        SELECT * FROM articles 
        WHERE type = ${type} 
        ORDER BY date DESC
      `;
      return rows;
    } catch (error) {
      console.error('Error fetching by type:', error);
      throw error;
    }
  },

  // Get single item by ID
  getById: async (id: number) => {
    try {
      const sql = getDb();
      const rows = await sql`
        SELECT * FROM articles 
        WHERE id = ${id}
      `;
      return rows[0] || null;
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
      const sql = getDb();
      const rows = await sql`
        INSERT INTO articles (title, description, author, readTime, date, tag, type, youtubeId)
        VALUES (${data.title}, ${data.description}, ${data.author}, 
                ${data.readTime || ''}, ${data.date}, ${data.tag || ''}, 
                ${data.type}, ${data.youtubeId || null})
        RETURNING *
      `;
      return rows[0];
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
      const sql = getDb();
      
      // Build dynamic update query
      const updates: string[] = [];
      const values: any[] = [];
      
      if (data.title !== undefined) {
        updates.push('title = $' + (values.length + 1));
        values.push(data.title);
      }
      if (data.description !== undefined) {
        updates.push('description = $' + (values.length + 1));
        values.push(data.description);
      }
      if (data.author !== undefined) {
        updates.push('author = $' + (values.length + 1));
        values.push(data.author);
      }
      if (data.readTime !== undefined) {
        updates.push('readTime = $' + (values.length + 1));
        values.push(data.readTime);
      }
      if (data.date !== undefined) {
        updates.push('date = $' + (values.length + 1));
        values.push(data.date);
      }
      if (data.tag !== undefined) {
        updates.push('tag = $' + (values.length + 1));
        values.push(data.tag);
      }
      if (data.youtubeId !== undefined) {
        updates.push('youtubeId = $' + (values.length + 1));
        values.push(data.youtubeId);
      }

      if (updates.length === 0) {
        return await dbOperations.getById(id);
      }

      updates.push('updatedAt = CURRENT_TIMESTAMP');
      values.push(id);

      const query = `
        UPDATE articles 
        SET ${updates.join(', ')}
        WHERE id = $${values.length}
        RETURNING *
      `;

      // Use raw query for dynamic updates
      const rows = await sql(query, values);
      return rows[0] || null;
    } catch (error) {
      console.error('Error updating item:', error);
      throw error;
    }
  },

  // Delete item
  delete: async (id: number) => {
    try {
      const sql = getDb();
      const result = await sql`
        DELETE FROM articles 
        WHERE id = ${id}
      `;
      return result.length > 0 || result.count > 0;
    } catch (error) {
      console.error('Error deleting item:', error);
      throw error;
    }
  },

  // Get all items (for homepage)
  getAll: async (limit?: number) => {
    try {
      const sql = getDb();
      if (limit) {
        const rows = await sql`
          SELECT * FROM articles 
          ORDER BY date DESC 
          LIMIT ${limit}
        `;
        return rows;
      } else {
        const rows = await sql`
          SELECT * FROM articles 
          ORDER BY date DESC
        `;
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
      const sql = getDb();
      const rows = await sql`
        SELECT * FROM articles 
        ORDER BY date DESC 
        LIMIT ${limit}
      `;
      return rows;
    } catch (error) {
      console.error('Error fetching latest items:', error);
      throw error;
    }
  },
};

export default dbOperations;
