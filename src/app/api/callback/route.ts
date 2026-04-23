import { NextRequest, NextResponse } from 'next/server';
import ZAI from 'z-ai-web-dev-sdk';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const AVAILABLE_SLOTS = [
  '9:00 AM PST',
  '10:00 AM PST',
  '11:00 AM PST',
  '1:00 PM PST',
  '2:00 PM PST',
  '3:00 PM PST',
  '4:00 PM PST',
];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, date, topic, message } = body;

    if (!name || !email || !phone) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields. Please provide name, email, and phone.' },
        { status: 400 }
      );
    }

    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Invalid email format.' },
        { status: 400 }
      );
    }

    const zai = await ZAI.create();

    const callbackDetails = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      date ? `Preferred Date: ${date}` : 'No date preference',
      `Topic: ${topic || 'General Inquiry'}`,
      message ? `Message: ${message}` : '',
    ].join('\n');

    const completion = await zai.chat.completions.create({
      messages: [
        {
          role: 'assistant',
          content: `You are a scheduling assistant for CodeSquad, a software development company. Given a callback request, generate a concise 2-sentence professional summary. Mention the topic and suggested next steps. Be warm and professional.`,
        },
        { role: 'user', content: callbackDetails },
      ],
      thinking: { type: 'disabled' },
    });

    const summary = completion.choices[0]?.message?.content?.trim() ?? 'Your callback has been scheduled!';

    return NextResponse.json({
      success: true,
      message: 'Callback request received! Our team will reach out within 2 hours.',
      summary,
      availableSlots: AVAILABLE_SLOTS,
    });
  } catch (error) {
    console.error('Callback API error:', error);
    return NextResponse.json(
      { success: false, message: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
