# Contact Form Setup Guide

Your contact form now has two options for sending emails:

## Option 1: EmailJS (Recommended)
EmailJS allows you to send emails directly from your static website without a backend server.

### Setup Steps:
1. Go to [EmailJS.com](https://www.emailjs.com/) and create a free account
2. Create a new service (Gmail, Outlook, etc.)
3. Create an email template
4. Get your Service ID, Template ID, and Public Key
5. Update the configuration in `script.js`:

```javascript
this.emailjsConfig = {
    serviceId: 'your_service_id_here',
    templateId: 'your_template_id_here', 
    publicKey: 'your_public_key_here',
    enabled: true // Set to true when configured
};
```

### EmailJS Template Variables:
Use these variables in your EmailJS template:
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{subject}}` - Email subject
- `{{message}}` - Email message
- `{{to_name}}` - Your name (Tarequl Islam)

## Option 2: Mailto Fallback (Current)
If EmailJS is not configured, the form will open the user's email client with a pre-filled email.

### How it works:
- User fills out the form
- Clicks "Send Message"
- Their default email client opens with:
  - To: tareq.tmns@email.com
  - Subject: [Form subject or "Portfolio Contact Form"]
  - Body: Formatted with name, email, and message

## Testing
1. Fill out the contact form
2. Click "Send Message"
3. If EmailJS is configured: Email is sent directly
4. If EmailJS is not configured: Email client opens with pre-filled message

## Current Status
- ✅ Form validation working
- ✅ EmailJS integration ready
- ✅ Mailto fallback working
- ⚠️ EmailJS needs to be configured for direct email sending
