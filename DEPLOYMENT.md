# Deployment Guide

## Issues Fixed

### 1. ESLint Errors
- Fixed unescaped quotes and apostrophes in JSX
- Removed invalid comment syntax in JSX
- All components now pass ESLint validation

### 2. Next.js Configuration
- Simplified `next.config.mjs` to avoid webpack issues
- Removed problematic MiniCssExtractPlugin dependency
- Added proper image domain configuration
- Added `unoptimized: true` for static hosting compatibility

### 3. Server-Side Rendering (SSR) Issues
- Fixed NextRouter mounting issues in `_app.js`
- Simplified app component to avoid SSR conflicts
- Removed analytics code that was causing build failures

### 4. Image Loading Issues on Netlify
- Added `unoptimized: true` to Next.js config for static images
- Updated Netlify configuration for proper asset handling
- Added cache headers for optimal performance

## Deployment Instructions

### For Netlify:
1. Connect your GitHub repository to Netlify
2. Use the following build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
3. The `netlify.toml` file is already configured
4. Add environment variables in Netlify dashboard:
   - `EMAIL_USER` (for contact form)
   - `EMAIL_PASS` (for contact form)

### For Vercel:
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect Next.js project
3. The `vercel.json` file is already configured
4. Add environment variables in Vercel dashboard:
   - `EMAIL_USER` (for contact form)
   - `EMAIL_PASS` (for contact form)

## Environment Variables Required

Create a `.env.local` file with:
```
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

## Build Verification

Run `npm run build` locally to verify everything works before deploying.

## Contact Form Setup

The contact form uses Nodemailer with Gmail SMTP. You'll need:
1. A Gmail account
2. An app-specific password (not your regular password)
3. Environment variables set in your deployment platform