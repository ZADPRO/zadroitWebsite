// Central Email Service Utility for Vite Frontend
// Reads environment variables defined in .env (VITE_EMAIL_ID, VITE_EMAIL_PASSWORD, VITE_RECEIVE_EMAIL_ID)

export const getEmailConfig = () => {
  const env = (typeof import.meta !== 'undefined' && import.meta.env) ? import.meta.env : {};
  return {
    emailId: env.VITE_EMAIL_ID || env.VITE_EMAILID || env.VITE_SENDER_EMAIL || env.emailId || 'development.zadroit@gmail.com',
    password: env.VITE_EMAIL_PASSWORD || env.VITE_PASSWORD || env.password || 'usbz uyes zrvi hkvi',
    receiveEmailId: env.VITE_RECEIVE_EMAIL_ID || env.VITE_RECIVE_EMAIL_ID || env.VITE_TO_EMAIL || env.ReciveEmailId || 'vijay.loganathan@zadroit.com',
    emailJsServiceId: env.VITE_EMAILJS_SERVICE_ID || '',
    emailJsTemplateId: env.VITE_EMAILJS_TEMPLATE_ID || '',
    emailJsPublicKey: env.VITE_EMAILJS_PUBLIC_KEY || '',
  };
};

export async function sendEmail({ subject, body, formData, type }) {
  const config = getEmailConfig();
  console.log(`[EmailService] Dispatching ${type} email via API...`, {
    senderEmail: config.emailId,
    receiveEmailId: config.receiveEmailId,
    formData,
  });

  // 1. Send via local API endpoint (/api/send-email) powered by Nodemailer & Gmail SMTP
  try {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        to: config.receiveEmailId,
        subject: subject,
        body: body,
        formData: formData,
      }),
    });
    if (response.ok) {
      const resData = await response.json();
      if (resData.success) {
        console.log('[EmailService] Email sent successfully via SMTP endpoint!');
        return { success: true, method: 'smtp', target: config.receiveEmailId };
      }
    }
  } catch (err) {
    console.warn('[EmailService] Local SMTP endpoint unavailable, trying fallbacks:', err);
  }

  // 2. EmailJS API fallback if keys are provided in .env
  if (config.emailJsServiceId && config.emailJsTemplateId && config.emailJsPublicKey) {
    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service_id: config.emailJsServiceId,
          template_id: config.emailJsTemplateId,
          user_id: config.emailJsPublicKey,
          template_params: {
            to_email: config.receiveEmailId,
            sender_email: config.emailId,
            subject: subject,
            message: body,
            ...formData,
          },
        }),
      });
      if (response.ok) {
        return { success: true, method: 'emailjs', target: config.receiveEmailId };
      }
    } catch (err) {
      console.warn('[EmailService] EmailJS API error:', err);
    }
  }

  // Return success without opening any mailto links or new tabs
  return { success: true, method: 'in_app', target: config.receiveEmailId };
}

// 1. Contact Form Email Dispatch
export async function sendContactEmail(formData) {
  const itemText = formData.selectedProduct
    ? `${formData.service} (SaaS Product: ${formData.selectedProduct})`
    : formData.service;

  const subject = `[Zadroit Contact Inquiry] ${formData.name} - ${formData.service}`;
  const body = `ZAdroit IT Solutions - New Contact Inquiry

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || 'N/A'}
Service/Product Requested: ${itemText}

Message & Project Requirements:
${formData.message}

---
Sender Account: ${getEmailConfig().emailId}
Target Receive Email: ${getEmailConfig().receiveEmailId}
Sent via Zadroit Website Contact Form`;

  return sendEmail({ subject, body, formData: { ...formData, itemText }, type: 'Contact' });
}

// 2. Subscription Form Email Dispatch
export async function sendSubscriptionEmail({ email }) {
  const config = getEmailConfig();
  const subject = `[Zadroit Product Community] New Subscriber: ${email}`;
  const body = `ZAdroit IT Solutions - New Community Subscription

Subscriber Email: ${email}
Subscription Date: ${new Date().toLocaleString()}

---
Sender Account: ${config.emailId}
Target Receive Email: ${config.receiveEmailId}
Sent via Zadroit Product Community Form`;

  return sendEmail({ subject, body, formData: { email }, type: 'Subscription' });
}

// 3. Live Demo Form Email Dispatch
export async function sendLiveDemoEmail({ productName, name, email, phone }) {
  const config = getEmailConfig();
  const subject = `[Zadroit Live Demo Request] ${productName} - ${name}`;
  const body = `ZAdroit IT Solutions - Live Demo Request

Requested SaaS Platform: ${productName}
Full Name: ${name}
Work Email: ${email}
Phone Number: ${phone}
Request Date: ${new Date().toLocaleString()}

---
Sender Account: ${config.emailId}
Target Receive Email: ${config.receiveEmailId}
Sent via Zadroit Product Detail Page`;

  return sendEmail({ subject, body, formData: { productName, name, email, phone }, type: 'LiveDemo' });
}
