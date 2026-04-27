import { NextRequest, NextResponse } from 'next/server';
import { dbOperations, initializeTables, seedInitialData } from '@/lib/db';

// Initialize database on first request
let isInitialized = false;

async function ensureInitialized() {
  if (!isInitialized) {
    try {
      await initializeTables();
      await seedInitialData();
      isInitialized = true;
    } catch (error) {
      console.error('Database initialization error:', error);
      // Continue anyway - table might already exist
      isInitialized = true;
    }
  }
}

// GET - Fetch articles by type
export async function GET(request: NextRequest) {
  try {
    await ensureInitialized();

    const searchParams = request.nextUrl.searchParams;
    const type = searchParams.get('type') as 'article' | 'white-paper' | 'podcast' | null;

    if (!type) {
      return NextResponse.json({ error: 'Type parameter is required' }, { status: 400 });
    }

    const items = await dbOperations.getByType(type);
    return NextResponse.json(items);
  } catch (error) {
    console.error('Error fetching articles:', error);
    return NextResponse.json({ error: 'Failed to fetch articles' }, { status: 500 });
  }
}

// POST - Create new article
export async function POST(request: NextRequest) {
  try {
    await ensureInitialized();

    const body = await request.json();
    const { title, description, author, readTime, date, tag, type, youtubeId } = body;

    // Validation
    if (!title || !description || !author || !date || !type) {
      return NextResponse.json(
        { error: 'Missing required fields: title, description, author, date, type' },
        { status: 400 }
      );
    }

    const newItem = await dbOperations.create({
      title,
      description,
      author,
      readTime: readTime || '',
      date,
      tag: tag || '',
      type,
      youtubeId: youtubeId || undefined,
    });

    return NextResponse.json(newItem, { status: 201 });
  } catch (error) {
    console.error('Error creating article:', error);
    return NextResponse.json({ error: 'Failed to create article' }, { status: 500 });
  }
}

// DELETE - Delete article
export async function DELETE(request: NextRequest) {
  try {
    await ensureInitialized();

    const searchParams = request.nextUrl.searchParams;
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'ID parameter is required' }, { status: 400 });
    }

    const success = await dbOperations.delete(parseInt(id));

    if (!success) {
      return NextResponse.json({ error: 'Article not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, message: 'Article deleted' });
  } catch (error) {
    console.error('Error deleting article:', error);
    return NextResponse.json({ error: 'Failed to delete article' }, { status: 500 });
  }
}

// PUT - Update article
export async function PUT(request: NextRequest) {
  try {
    await ensureInitialized();

    const body = await request.json();
    const { id, ...updateData } = body;

    if (!id) {
      return NextResponse.json({ error: 'ID is required' }, { status: 400 });
    }

    const updatedItem = await dbOperations.update(parseInt(id), updateData);

    if (!updatedItem) {
      return NextResponse.json({ error: 'Article not found' }, { status: 404 });
    }

    return NextResponse.json(updatedItem);
  } catch (error) {
    console.error('Error updating article:', error);
    return NextResponse.json({ error: 'Failed to update article' }, { status: 500 });
  }
}
