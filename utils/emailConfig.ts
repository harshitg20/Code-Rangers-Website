// EmailJS Configuration
// To make this fully functional, you need to:
// 1. Create an account at https://www.emailjs.com/
// 2. Create an email service (Gmail, Outlook, etc.)
// 3. Create an email template
// 4. Get your Service ID, Template ID, and Public Key
// 5. Replace the values below with your actual EmailJS credentials

export const emailConfig = {
  serviceId: 'service_9ykevma', // Replace with your EmailJS service ID
  templateId: 'template_2pj4k4m', // Replace with your EmailJS template ID
  publicKey: 'ZwoRz4C8Qm1DjvQQl', // Replace with your EmailJS public key
};

// Example EmailJS template variables:
// {{from_name}} - Sender's name
// {{from_email}} - Sender's email
// {{subject}} - Email subject
// {{category}} - Message category
// {{message}} - Message content
// {{to_email}} - Recipient email (geekroom@plaksha.edu.in)

// To set up EmailJS:
// 1. Go to https://www.emailjs.com/
// 2. Sign up and verify your email
// 3. Add an email service (Gmail recommended)
// 4. Create an email template with the variables above
// 5. Copy your Service ID, Template ID, and Public Key
// 6. Replace the placeholder values in this file
// 7. Uncomment the EmailJS code in Contact.tsx

export const emailTemplate = `
Hello Code Rangers Team,

You have received a new message from your website contact form:

Name: {{from_name}}
Email: {{from_email}}
Category: {{category}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from the Code Rangers website contact form.
`;