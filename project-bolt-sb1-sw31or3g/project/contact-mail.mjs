import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.dirname(fileURLToPath(import.meta.url));

function mailConfig() {
  dotenv.config({ path: path.join(root, '.env'), override: true });
  return {
    smtpUser: process.env.SMTP_USER,
    smtpPass: process.env.SMTP_PASS,
    contactTo: process.env.CONTACT_TO || 'kayalinysmk@gmail.com',
  };
}

export async function sendContactMessage({ name, email, subject, message }) {
  const { smtpUser, smtpPass, contactTo } = mailConfig();

  if (!smtpUser || !smtpPass) {
    throw new Error('Email is not configured. Missing SMTP_USER or SMTP_PASS.');
  }

  if (!name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
    const error = new Error('All fields are required.');
    error.status = 400;
    throw error;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    const error = new Error('Please enter a valid email address.');
    error.status = 400;
    throw error;
  }

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  await transporter.sendMail({
    from: `"Portfolio Contact" <${smtpUser}>`,
    to: contactTo,
    replyTo: email,
    subject: `[Portfolio] ${subject}`,
    text: [
      'New message from the portfolio contact form',
      '',
      `Name: ${name}`,
      `Email: ${email}`,
      `Subject: ${subject}`,
      '',
      'Message:',
      message,
    ].join('\n'),
    html: `
      <h2>New portfolio contact message</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
    `,
  });
}

export function contactApiMiddleware(req, res, next) {
  if (req.url?.startsWith('/api/health') && req.method === 'GET') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ ok: true }));
    return;
  }

  if (req.url?.startsWith('/api/contact') && req.method === 'POST') {
    readJson(req)
      .then((body) => sendContactMessage(body))
      .then(() => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ ok: true }));
      })
      .catch((error) => {
        console.error('Contact email failed:', error);
        res.statusCode = error.status || 500;
        res.setHeader('Content-Type', 'application/json');
        res.end(
          JSON.stringify({
            ok: false,
            error: error.status === 400 ? error.message : 'Failed to send message. Please try again.',
          }),
        );
      });
    return;
  }

  next();
}

function readJson(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on('data', (chunk) => chunks.push(chunk));
    req.on('end', () => {
      try {
        const raw = Buffer.concat(chunks).toString('utf8');
        resolve(raw ? JSON.parse(raw) : {});
      } catch {
        const error = new Error('Invalid form data.');
        error.status = 400;
        reject(error);
      }
    });
    req.on('error', reject);
  });
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}
