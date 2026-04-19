import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Contact from '@/models/Contact';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    await dbConnect();
    
    // Mongoose validates automatically when creating the document
    const contact = await Contact.create(body);
    
    return NextResponse.json(
      { message: 'Message sent successfully', data: contact },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Error in contact route:', error);
    
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map((val: any) => val.message);
      return NextResponse.json(
        { message: 'Validation failed', errors: messages },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
