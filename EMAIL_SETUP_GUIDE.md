# Form Service Setup Guide

## Current Status

The forms are configured to use a **form service** (Web3Forms by default). Form submissions will be sent directly to `pravita@payaana.in` via the form service.

## Setup: Web3Forms (Recommended - Free & Easy)

Web3Forms is a free form service that requires no signup and sends emails directly to your inbox.

### Step 1: Get Your Access Key

1. Go to [https://web3forms.com](https://web3forms.com)
2. Enter your email: `pravita@payaana.in`
3. Click **Get Access Key**
4. Copy the access key (you'll receive it via email)

### Step 2: Add to Environment Variables

Create or update `.env.local` in your project root:

```env
FORM_SERVICE_ACCESS_KEY=your_access_key_here
FORM_SERVICE_URL=https://api.web3forms.com/submit
```

**Note:** The `FORM_SERVICE_URL` is optional - it defaults to Web3Forms if not provided.

### Step 3: Test

1. Submit a test form on your website
2. Check the email inbox at `pravita@payaana.in`
3. You should receive the form submission via email

## Alternative Form Services

### Option 2: Formspree

1. Sign up at [https://formspree.io](https://formspree.io)
2. Create a new form
3. Get your form endpoint URL
4. Update `.env.local`:

```env
FORM_SERVICE_URL=https://formspree.io/f/YOUR_FORM_ID
FORM_SERVICE_ACCESS_KEY=your_formspree_key
```

**Note:** You may need to modify the API routes to match Formspree's format.

### Option 3: FormSubmit

1. No signup needed!
2. Update `.env.local`:

```env
FORM_SERVICE_URL=https://formsubmit.co/ajax/pravita@payaana.in
FORM_SERVICE_ACCESS_KEY=not_required
```

**Note:** FormSubmit format may require API route modifications.

---

## How It Works

1. User submits form on your website
2. Form data is sent to your Next.js API route (`/api/contact` or `/api/package-inquiry`)
3. API route validates the data
4. API route forwards the submission to the form service (Web3Forms)
5. Form service sends email to `pravita@payaana.in`
6. User sees success message

## Troubleshooting

**Emails not sending:**

- Check that `FORM_SERVICE_ACCESS_KEY` is set in `.env.local`
- Verify the access key is correct (get a new one from web3forms.com if needed)
- Check your spam folder
- Make sure `pravita@payaana.in` is a valid email address

**Form service errors:**

- Check server logs for error messages
- Verify the form service URL is correct
- Test the access key on web3forms.com

**Rate limits:**

- Web3Forms free tier: 250 submissions/month
- Upgrade to paid plan for more submissions
- Consider Formspree or other services for higher limits

---

## Current Email Recipient

All form submissions are configured to go to: **pravita@payaana.in**

To change this, update the `to` field in both API route files:

- `app/api/contact/route.ts`
- `app/api/package-inquiry/route.ts`
