import { NextRequest, NextResponse } from 'next/server';
import ZAI from 'z-ai-web-dev-sdk';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, service, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        {
          success: false,
          message: 'Missing required fields. Please provide name, email, and message.',
        },
        { status: 400 }
      );
    }

    // Validate email format
    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        {
          success: false,
          message: 'Invalid email format. Please provide a valid email address.',
        },
        { status: 400 }
      );
    }

    // Generate a professional AI summary of the inquiry
    const zai = await ZAI.create();

    const inquiryDetails = [
      `Name: ${name}`,
      `Email: ${email}`,
      company ? `Company: ${company}` : null,
      service ? `Service Interest: ${service}` : null,
      `Message: ${message}`,
    ]
      .filter(Boolean)
      .join('\n');

    const completion = await zai.chat.completions.create({
      messages: [
        {
          role: 'assistant',
          content:
            'You are a helpful assistant for a software development agency called CodeSquad. Given a contact form inquiry, produce a single concise paragraph (2-3 sentences) summarizing the inquiry in a professional, friendly tone. Do not include any greeting, headers, or bullet points — just the summary paragraph.',
        },
        {
          role: 'user',
          content: inquiryDetails,
        },
      ],
      thinking: { type: 'disabled' },
    });

    const summary = completion.choices[0]?.message?.content?.trim() ?? 'Thank you for reaching out to CodeSquad!';

    return NextResponse.json({
      success: true,
      message: 'Thank you! Your message has been received. Our team will get back to you shortly.',
      summary,
    });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Something went wrong while processing your request. Please try again later.',
      },
      { status: 500 }
    );
  }
}
