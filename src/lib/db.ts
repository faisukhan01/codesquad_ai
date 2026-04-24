import Database from 'better-sqlite3';
import path from 'path';
import fs from 'fs';

// Database file path
const dbPath = path.join(process.cwd(), 'content.db');

// Initialize database
let db: Database.Database;

export function getDatabase() {
  if (!db) {
    db = new Database(dbPath);
    db.pragma('journal_mode = WAL'); // Better performance
    initializeTables();
    seedInitialData();
  }
  return db;
}

// Create tables
function initializeTables() {
  const db = getDatabase();

  // Articles table
  db.exec(`
    CREATE TABLE IF NOT EXISTS articles (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      description TEXT NOT NULL,
      author TEXT NOT NULL,
      readTime TEXT,
      date TEXT NOT NULL,
      tag TEXT,
      type TEXT NOT NULL DEFAULT 'article',
      youtubeId TEXT,
      createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
      updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // Create index for faster queries
  db.exec(`
    CREATE INDEX IF NOT EXISTS idx_articles_type ON articles(type);
    CREATE INDEX IF NOT EXISTS idx_articles_date ON articles(date);
  `);
}

// Seed initial data from JSON files
function seedInitialData() {
  const db = getDatabase();
  
  // Check if data already exists
  const count = db.prepare('SELECT COUNT(*) as count FROM articles').get() as { count: number };
  
  if (count.count > 0) {
    return; // Data already seeded
  }

  console.log('Seeding initial data...');

  // Import JSON data
  const articlesPath = path.join(process.cwd(), 'src/data/articles.json');
  const whitePapersPath = path.join(process.cwd(), 'src/data/white-papers.json');
  const podcastsPath = path.join(process.cwd(), 'src/data/podcasts.json');

  try {
    // Seed articles
    if (fs.existsSync(articlesPath)) {
      const articles = JSON.parse(fs.readFileSync(articlesPath, 'utf-8'));
      const insertArticle = db.prepare(`
        INSERT INTO articles (id, title, description, author, readTime, date, tag, type)
        VALUES (?, ?, ?, ?, ?, ?, ?, 'article')
      `);
      
      for (const article of articles) {
        insertArticle.run(
          article.id,
          article.title,
          article.description,
          article.author,
          article.readTime,
          article.date,
          article.tag
        );
      }
      console.log(`Seeded ${articles.length} articles`);
    }

    // Seed white papers
    if (fs.existsSync(whitePapersPath)) {
      const whitePapers = JSON.parse(fs.readFileSync(whitePapersPath, 'utf-8'));
      const insertWhitePaper = db.prepare(`
        INSERT INTO articles (id, title, description, author, readTime, date, tag, type)
        VALUES (?, ?, ?, ?, ?, ?, ?, 'white-paper')
      `);
      
      for (const paper of whitePapers) {
        insertWhitePaper.run(
          paper.id + 1000, // Offset IDs to avoid conflicts
          paper.title,
          paper.description,
          paper.author,
          paper.readTime,
          paper.date,
          paper.tag
        );
      }
      console.log(`Seeded ${whitePapers.length} white papers`);
    }

    // Seed podcasts
    if (fs.existsSync(podcastsPath)) {
      const podcasts = JSON.parse(fs.readFileSync(podcastsPath, 'utf-8'));
      const insertPodcast = db.prepare(`
        INSERT INTO articles (id, title, description, author, readTime, date, tag, type, youtubeId)
        VALUES (?, ?, ?, ?, ?, ?, ?, 'podcast', ?)
      `);
      
      for (const podcast of podcasts) {
        insertPodcast.run(
          podcast.id + 2000, // Offset IDs to avoid conflicts
          podcast.title,
          podcast.description,
          podcast.author,
          podcast.readTime,
          podcast.date,
          podcast.tag,
          podcast.youtubeId || null
        );
      }
      console.log(`Seeded ${podcasts.length} podcasts`);
    }

    console.log('Initial data seeded successfully!');
  } catch (error) {
    console.error('Error seeding data:', error);
  }
}

// Database operations
export const dbOperations = {
  // Get all items by type
  getByType: (type: 'article' | 'white-paper' | 'podcast') => {
    const db = getDatabase();
    return db.prepare('SELECT * FROM articles WHERE type = ? ORDER BY date DESC').all(type);
  },

  // Get single item by ID
  getById: (id: number) => {
    const db = getDatabase();
    return db.prepare('SELECT * FROM articles WHERE id = ?').get(id);
  },

  // Create new item
  create: (data: {
    title: string;
    description: string;
    author: string;
    readTime?: string;
    date: string;
    tag?: string;
    type: 'article' | 'white-paper' | 'podcast';
    youtubeId?: string;
  }) => {
    const db = getDatabase();
    const stmt = db.prepare(`
      INSERT INTO articles (title, description, author, readTime, date, tag, type, youtubeId)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `);
    
    const result = stmt.run(
      data.title,
      data.description,
      data.author,
      data.readTime || '',
      data.date,
      data.tag || '',
      data.type,
      data.youtubeId || null
    );
    
    return { id: result.lastInsertRowid, ...data };
  },

  // Update item
  update: (id: number, data: {
    title?: string;
    description?: string;
    author?: string;
    readTime?: string;
    date?: string;
    tag?: string;
    youtubeId?: string;
  }) => {
    const db = getDatabase();
    const fields = Object.keys(data).map(key => `${key} = ?`).join(', ');
    const values = Object.values(data);
    
    const stmt = db.prepare(`
      UPDATE articles 
      SET ${fields}, updatedAt = CURRENT_TIMESTAMP 
      WHERE id = ?
    `);
    
    stmt.run(...values, id);
    return dbOperations.getById(id);
  },

  // Delete item
  delete: (id: number) => {
    const db = getDatabase();
    const stmt = db.prepare('DELETE FROM articles WHERE id = ?');
    const result = stmt.run(id);
    return result.changes > 0;
  },

  // Get all items (for homepage)
  getAll: (limit?: number) => {
    const db = getDatabase();
    const query = limit 
      ? 'SELECT * FROM articles ORDER BY date DESC LIMIT ?'
      : 'SELECT * FROM articles ORDER BY date DESC';
    
    return limit ? db.prepare(query).all(limit) : db.prepare(query).all();
  },

  // Get latest items for homepage
  getLatest: (limit: number = 6) => {
    const db = getDatabase();
    return db.prepare('SELECT * FROM articles ORDER BY date DESC LIMIT ?').all(limit);
  },
};

export default getDatabase;
