import express from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'dist')));

app.post('/api/send-email', async (req, res) => {
  try {
    const { to, subject, body } = req.body;
    const emailId = process.env.VITE_EMAIL_ID || 'development.zadroit@gmail.com';
    const password = process.env.VITE_EMAIL_PASSWORD || 'usbz uyes zrvi hkvi';
    const targetEmail = to || process.env.VITE_RECEIVE_EMAIL_ID || 'vijay.loganathan@zadroit.com';

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: emailId,
        pass: password,
      },
    });

    const info = await transporter.sendMail({
      from: `"ZAdroit Solutions" <${emailId}>`,
      to: targetEmail,
      subject: subject || '[Zadroit Inquiry]',
      text: body || '',
      html: `<div style="font-family: Arial, sans-serif; padding: 20px; color: #0f172a; line-height: 1.6;">
        <h2 style="color: #0284c7; border-bottom: 2px solid #bae6fd; padding-bottom: 8px;">${subject || 'ZAdroit Inquiry'}</h2>
        <pre style="font-family: inherit; font-size: 14px; background: #f8fafc; padding: 16px; border-radius: 12px; border: 1px solid #e2e8f0; white-space: pre-wrap;">${body}</pre>
        <p style="font-size: 12px; color: #64748b; margin-top: 20px;">Sent automatically from ZAdroit Website via ${emailId}</p>
      </div>`,
    });

    // Log subscriber details to Microsoft Excel CSV file & Webhook if Subscription
    if (req.body.type === 'Subscription' || req.body.formData?.email) {
      const subEmail = req.body.formData?.email || req.body.email;
      if (subEmail) {
        try {
          const csvPath = path.join(process.cwd(), 'subscribers.csv');
          if (!fs.existsSync(csvPath)) {
            fs.writeFileSync(csvPath, 'Email Address,Subscription Date,Source\n');
          }
          fs.appendFileSync(csvPath, `"${subEmail}","${new Date().toLocaleString()}","ZAdroit Product Community"\n`);
          console.log(`[Express Server] Saved subscriber ${subEmail} to Microsoft Excel CSV file (subscribers.csv)`);
        } catch (fsErr) {
          console.error('[Express Server] Error writing subscribers.csv:', fsErr);
        }

        const sheetWebhook = process.env.VITE_MICROSOFT_SHEET_WEBHOOK_URL || process.env.VITE_EXCEL_WEBHOOK_URL;
        if (sheetWebhook) {
          try {
            await fetch(sheetWebhook, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                email: subEmail,
                date: new Date().toLocaleString(),
                source: 'ZAdroit Product Community Website',
              }),
            });
            console.log('[Express Server] Dispatched subscriber to Microsoft Sheet Webhook');
          } catch (whErr) {
            console.warn('[Express Server] Webhook dispatch error:', whErr);
          }
        }
      }
    }

    res.json({ success: true, messageId: info.messageId });
  } catch (err) {
    console.error('Express email endpoint error:', err);
    res.status(500).json({ success: false, error: err.message });
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
