import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    // 1. Check if body exists
    const body = await request.json();
    const { name, email, message } = body;

    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    // 2. Enhanced logging to debug in your terminal
    if (!botToken || !chatId) {
      console.error("Environment variables missing");
      return NextResponse.json({ error: 'Missing tokens' }, { status: 500 });
    }

    const text = `🚀 *Portfolio Lead*\n\n👤 *Name:* ${name}\n📧 *Email:* ${email}\n\n📝 *Message:*\n${message}`;

    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
    
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        chat_id: chatId, 
        text, 
        parse_mode: 'Markdown' 
      }),
    });

    const data = await response.json();

    if (response.ok) {
      return NextResponse.json({ success: true });
    } else {
      console.error("Telegram Error:", data);
      return NextResponse.json({ error: data.description }, { status: 500 });
    }

  } catch (error) {
    console.error("Internal Server Error:", error);
    return NextResponse.json({ error: 'Internal Error' }, { status: 500 });
  }
}