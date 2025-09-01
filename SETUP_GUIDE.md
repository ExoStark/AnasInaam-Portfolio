# 🚀 Quick Start Guide

Welcome to your Developer Portfolio! This enhanced version includes improved error handling, better performance, and additional features.

## ⚡ Quick Setup (3 minutes)

1. **Clone and Install**
   ```bash
   git clone <your-repo-url>
   cd developer-portfolio
   npm install
   ```

2. **Run Setup Script**
   ```bash
   npm run setup
   ```

3. **Start Development**
   ```bash
   npm run dev
   ```

4. **Open**: http://localhost:3000

## 🛠️ What's New & Fixed

### ✅ Fixed Issues
- **ES Module Error**: Fixed when running files directly
- **Missing Environment Variables**: Added comprehensive .env template
- **Contact Form Validation**: Enhanced with better error handling
- **Project Data**: Completed missing descriptions and tools
- **Error Boundaries**: Added React error boundaries for better UX

### 🆕 New Features
- **Enhanced Error Handling**: Better API responses and user feedback
- **Loading States**: Improved UX with loading spinners
- **Form Validation**: Real-time validation with detailed error messages
- **Performance**: Optimized blog fetching with caching
- **Setup Script**: Automated setup process
- **Better TypeScript Support**: Improved type safety

### 🔧 Technical Improvements
- **API Route Enhancement**: Better validation and error responses
- **Network Error Handling**: Timeout handling and retry logic
- **Toast Notifications**: Improved styling and positioning
- **Environment Validation**: Check for missing configuration
- **Code Organization**: Better component structure

## 📁 Project Structure

```
├── app/
│   ├── components/
│   │   ├── error-boundary.jsx          # ✨ New: Error boundary
│   │   ├── helper/
│   │   │   └── loading-spinner.jsx     # ✨ New: Loading component
│   │   └── homepage/
│   ├── api/
│   │   └── contact/route.js             # 🔧 Enhanced: Better validation
│   └── layout.js                        # 🔧 Enhanced: Error boundary integration
├── utils/data/                          # 📝 Your content files
├── scripts/
│   └── setup.js                         # ✨ New: Setup automation
└── .env                                 # 🔧 Enhanced: Complete template
```

## 🔑 Environment Variables

Update your `.env` file with these values:

```env
# Required for Google Analytics
NEXT_PUBLIC_GTM=GTM-XXXXXXXXX

# Required for contact form API
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Required for contact notifications
TELEGRAM_BOT_TOKEN=your_bot_token
TELEGRAM_CHAT_ID=your_chat_id
GMAIL_PASSKEY=your_app_password
EMAIL_ADDRESS=your_email@gmail.com

# Optional: reCAPTCHA (remove if not using)
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_site_key
NEXT_PUBLIC_RECAPTCHA_SECRET_KEY=your_secret_key
```

## 📝 Customization

Edit these files to customize your portfolio:

1. **Personal Info**: `utils/data/personal-data.js`
2. **Projects**: `utils/data/projects-data.js`
3. **Experience**: `utils/data/experience.js`
4. **Education**: `utils/data/educations.js`
5. **Skills**: `utils/data/skills.js`

## 🚀 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect to Vercel
3. Add environment variables
4. Deploy!

### Environment Variables for Production
```env
NEXT_PUBLIC_GTM=your_gtm_id
NEXT_PUBLIC_APP_URL=https://yourdomain.com
TELEGRAM_BOT_TOKEN=your_bot_token
TELEGRAM_CHAT_ID=your_chat_id
GMAIL_PASSKEY=your_gmail_app_password
EMAIL_ADDRESS=your_email@gmail.com
```

## 🆘 Troubleshooting

### Common Issues

1. **Contact Form Not Working**
   - Check environment variables are set
   - Verify Gmail app password is correct
   - Test Telegram bot is working

2. **Blog Posts Not Loading**
   - Check `devUsername` in `personal-data.js`
   - Ensure dev.to profile is public

3. **Environment Variables Not Working**
   - Restart development server after changing .env
   - Check for typos in variable names

### Getting Help

1. Check the console for error messages
2. Verify all environment variables are set
3. Run `npm run setup` to reconfigure

## 📚 Features Overview

- **Hero Section**: Animated introduction
- **About**: Personal description
- **Experience**: Work history with timeline
- **Skills**: Technical skills with icons
- **Projects**: Portfolio showcase
- **Education**: Academic background
- **Blog**: Auto-synced from dev.to
- **Contact**: Form with email + Telegram notifications

## 🎨 Customization Tips

1. **Colors**: Edit TailwindCSS classes in components
2. **Animations**: Lottie files in `public/lottie/`
3. **Images**: Replace files in `public/image/`
4. **Fonts**: Modify in `app/layout.js`

---

Made with ❤️ using Next.js 14, TailwindCSS, and modern web technologies.
