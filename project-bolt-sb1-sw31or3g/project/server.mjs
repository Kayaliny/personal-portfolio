import cors from 'cors';
import express from 'express';
import { sendContactMessage } from './contact-mail.mjs';

const app = express();
const port = Number(process.env.PORT) || 3001;

app.use(cors({ origin: true }));
app.use(express.json({ limit: '100kb' }));

app.use((error, _req, res, next) => {
  if (error instanceof SyntaxError) {
    return res.status(400).json({ ok: false, error: 'Invalid form data.' });
  }
  return next(error);
});

app.get('/api/health', (_req, res) => {
  res.json({ ok: true });
});

app.post('/api/contact', async (req, res) => {
  try {
    await sendContactMessage(req.body ?? {});
    return res.json({ ok: true });
  } catch (error) {
    console.error('Contact email failed:', error);
    const status = error.status || 500;
    return res.status(status).json({
      ok: false,
      error: status === 400 ? error.message : 'Failed to send message. Please try again.',
    });
  }
});

app.listen(port, () => {
  console.log(`Contact API running on http://localhost:${port}`);
});
