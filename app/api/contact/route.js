import axios from 'axios';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Create and configure Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, 
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.GMAIL_PASSKEY, 
  },
});

// Helper function to send a message via Telegram
async function sendTelegramMessage(token, chat_id, message) {
  const url = `https://api.telegram.org/bot${token}/sendMessage`;
  try {
    const res = await axios.post(url, {
      text: message,
      chat_id,
    });
    return res.data.ok;
  } catch (error) {
    console.error('Error sending Telegram message:', error.response?.data || error.message);
    return false;
  }
};

// HTML email template
const generateEmailTemplate = (name, email, userMessage) => `
  <div style="font-family: Arial, sans-serif; color: #333; padding: 20px; background-color: #f4f4f4;">
    <div style="max-width: 600px; margin: auto; background-color: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);">
      <h2 style="color: #007BFF;">New Message Received</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <blockquote style="border-left: 4px solid #007BFF; padding-left: 10px; margin-left: 0;">
        ${userMessage}
      </blockquote>
      <p style="font-size: 12px; color: #888;">Click reply to respond to the sender.</p>
    </div>
  </div>
`;

// Helper function to send an email via Nodemailer
async function sendEmail(payload, message) {
  const { name, email, message: userMessage } = payload;
  
  const mailOptions = {
    from: "Portfolio", 
    to: process.env.EMAIL_ADDRESS, 
    subject: `New Message From ${name}`, 
    text: message, 
    html: generateEmailTemplate(name, email, userMessage), 
    replyTo: email, 
  };
  
  try {
    await transporter.sendMail(mailOptions);
    return true;
  } catch (error) {
    console.error('Error while sending email:', error.message);
    return false;
  }
};

export async function POST(request) {
  try {
    const payload = await request.json();
    const { name, email, message: userMessage } = payload;

    console.log('Contact form submission:', { name, email, messageLength: userMessage?.length });

    // Validate input data
    if (!name || !email || !userMessage) {
      console.log('Validation failed: Missing fields');
      return NextResponse.json({
        success: false,
        message: 'All fields (name, email, message) are required.',
      }, { status: 400 });
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({
        success: false,
        message: 'Please provide a valid email address.',
      }, { status: 400 });
    }

    // Validate message length
    if (userMessage.length < 5) {
      return NextResponse.json({
        success: false,
        message: 'Message must be at least 5 characters long.',
      }, { status: 400 });
    }

    if (userMessage.length > 500) {
      return NextResponse.json({
        success: false,
        message: 'Message must be less than 500 characters.',
      }, { status: 400 });
    }

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chat_id = process.env.TELEGRAM_CHAT_ID;
    const emailAddress = process.env.EMAIL_ADDRESS;
    const gmailPasskey = process.env.GMAIL_PASSKEY;

    // Check if required environment variables are set
    const missingEnvVars = [];
    if (!token) missingEnvVars.push('TELEGRAM_BOT_TOKEN');
    if (!chat_id) missingEnvVars.push('TELEGRAM_CHAT_ID');
    if (!emailAddress) missingEnvVars.push('EMAIL_ADDRESS');
    if (!gmailPasskey) missingEnvVars.push('GMAIL_PASSKEY');

    if (missingEnvVars.length > 0) {
      console.error('Missing environment variables:', missingEnvVars);
      return NextResponse.json({
        success: false,
        message: 'Server configuration error. Please contact the administrator.',
      }, { status: 500 });
    }

    const message = `🔔 New Portfolio Contact Message\n\n👤 Name: ${name}\n📧 Email: ${email}\n💬 Message:\n\n${userMessage}\n\n⏰ Received: ${new Date().toLocaleString()}`;

    // Send Telegram message
    const telegramSuccess = await sendTelegramMessage(token, chat_id, message);

    // Send email
    const emailSuccess = await sendEmail(payload, message);

    if (telegramSuccess && emailSuccess) {
      return NextResponse.json({
        success: true,
        message: 'Message sent successfully! I will get back to you soon.',
      }, { status: 200 });
    } else if (telegramSuccess || emailSuccess) {
      return NextResponse.json({
        success: true,
        message: 'Message sent successfully via ' + (telegramSuccess ? 'Telegram' : 'email') + '.',
      }, { status: 200 });
    }

    return NextResponse.json({
      success: false,
      message: 'Failed to send message. Please try again later or contact me directly.',
    }, { status: 500 });
  } catch (error) {
    console.error('API Error:', error.message);
    return NextResponse.json({
      success: false,
      message: 'Server error occurred. Please try again later.',
    }, { status: 500 });
  }
};