import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import nodemailer from 'nodemailer'
import fs from 'fs'
import path from 'path'

function emailApiPlugin() {
  return {
    name: 'vite-plugin-email-api',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (req.url === '/api/send-email' && req.method === 'POST') {
          let body = '';
          req.on('data', chunk => { body += chunk.toString(); });
          req.on('end', async () => {
            try {
              const data = JSON.parse(body);
              const env = loadEnv('development', process.cwd(), '');
              const emailId = env.VITE_EMAIL_ID || 'development.zadroit@gmail.com';
              const password = env.VITE_EMAIL_PASSWORD || 'usbz uyes zrvi hkvi';
              const targetEmail = data.to || env.VITE_RECEIVE_EMAIL_ID || 'vijay.loganathan@zadroit.com';

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
                subject: data.subject || '[Zadroit Inquiry]',
                text: data.body || '',
                html: `<div style="font-family: Arial, sans-serif; padding: 20px; color: #0f172a; line-height: 1.6;">
                  <h2 style="color: #0284c7; border-bottom: 2px solid #bae6fd; padding-bottom: 8px;">${data.subject || 'ZAdroit Inquiry'}</h2>
                  <pre style="font-family: inherit; font-size: 14px; background: #f8fafc; padding: 16px; border-radius: 12px; border: 1px solid #e2e8f0; white-space: pre-wrap;">${data.body}</pre>
                  <p style="font-size: 12px; color: #64748b; margin-top: 20px;">Sent automatically from ZAdroit Website via ${emailId}</p>
                </div>`,
              });

              // Log subscriber details to Microsoft Excel compatible CSV & Webhook if Subscription
              if (data.type === 'Subscription' || data.formData?.email) {
                const subEmail = data.formData?.email || data.email;
                if (subEmail) {
                  try {
                    const csvPath = path.join(process.cwd(), 'subscribers.csv');
                    if (!fs.existsSync(csvPath)) {
                      fs.writeFileSync(csvPath, 'Email Address,Subscription Date,Source\n');
                    }
                    fs.appendFileSync(csvPath, `"${subEmail}","${new Date().toLocaleString()}","ZAdroit Product Community"\n`);
                    console.log(`[Email Plugin] Saved subscriber ${subEmail} to Microsoft Excel CSV file (subscribers.csv)`);
                  } catch (fsErr) {
                    console.error('[Email Plugin] Error writing subscribers.csv:', fsErr);
                  }

                  const sheetWebhook = env.VITE_MICROSOFT_SHEET_WEBHOOK_URL || env.VITE_EXCEL_WEBHOOK_URL;
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
                      console.log('[Email Plugin] Dispatched subscriber to Microsoft Sheet Webhook');
                    } catch (whErr) {
                      console.warn('[Email Plugin] Webhook dispatch error:', whErr);
                    }
                  }
                }
              }

              console.log('[Email Plugin] Email dispatched successfully:', info.messageId);
              res.statusCode = 200;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ success: true, messageId: info.messageId }));
            } catch (err) {
              console.error('[Email Plugin] Error sending email via Nodemailer:', err);
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ success: false, error: err.message }));
            }
          });
          return;
        }
        next();
      });
    },
  };
}

export default defineConfig({
  plugins: [react(), emailApiPlugin()],
})
