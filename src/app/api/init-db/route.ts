import { NextResponse } from 'next/server';
import { initializeTables, seedInitialData } from '@/lib/db';

// This endpoint can be called to manually initialize the database
export async function GET() {
  try {
    console.log('Initializing database tables...');
    await initializeTables();
    
    console.log('Seeding initial data...');
    await seedInitialData();
    
    return NextResponse.json({ 
      success: true, 
      message: 'Database initialized and seeded successfully' 
    });
  } catch (error: any) {
    console.error('Database initialization error:', error);
    return NextResponse.json({ 
      success: false, 
      error: error.message || 'Failed to initialize database',
      details: error.toString()
    }, { status: 500 });
  }
}
