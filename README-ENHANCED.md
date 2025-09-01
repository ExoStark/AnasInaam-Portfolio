# 🚀 Modern Developer Portfolio

A comprehensive, modern portfolio website built with Next.js 14, featuring AI integration, dynamic content management, and professional design. Perfect for developers, designers, and tech professionals.

![Portfolio Preview](/public/image/portfolio.gif)

## 🌟 Features

### Core Features
- **Modern Design**: Clean, professional, and responsive design
- **Fast Performance**: Built with Next.js 14 and optimized for speed
- **SEO Optimized**: Meta tags, structured data, and search engine friendly
- **Mobile Responsive**: Perfect on all devices and screen sizes
- **Dark Theme**: Professional dark theme with vibrant accents

### Advanced Features
- **AI Integration**: OpenAI-powered features and recommendations
- **Contact Form**: Dual notification system (Email + Telegram)
- **Dynamic Blog**: Integrated with dev.to API and local content
- **Animations**: Smooth Lottie animations and transitions
- **Error Handling**: Comprehensive error boundaries and fallbacks
- **Loading States**: Professional loading spinners and states

### Portfolio Sections
- **Hero Section**: Dynamic introduction with professional photo
- **About**: Comprehensive personal and professional overview
- **Experience**: Professional work history and achievements
- **Skills**: Technical skills with visual icons and categories
- **Projects**: Portfolio projects with live demos and GitHub links
- **Education**: Academic background and qualifications
- **Certifications**: Professional certifications and credentials
- **Achievements**: Awards, competitions, and milestones
- **Blog**: Technical articles and thought leadership
- **Contact**: Multi-channel contact form with instant notifications

## 🛠️ Technology Stack

### Frontend
- **Next.js 14**: React framework with App Router
- **React 18**: Latest React with concurrent features
- **TailwindCSS**: Utility-first CSS framework
- **Lottie React**: High-quality animations

### Backend & APIs
- **Node.js**: Runtime environment
- **MongoDB**: Database for contact form data
- **Gmail API**: Email notifications
- **Telegram Bot API**: Instant messaging notifications
- **Dev.to API**: Blog content integration

### Development & Deployment
- **ESLint**: Code linting and quality
- **PostCSS**: CSS processing
- **Vercel**: Deployment platform
- **Git**: Version control

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- Gmail account for email notifications
- Telegram bot for instant notifications
- MongoDB database (optional)

### 1. Clone and Install
```bash
git clone https://github.com/your-username/developer-portfolio.git
cd developer-portfolio
npm install
```

### 2. Environment Setup
Create a `.env` file in the root directory:

```env
# Gmail Configuration
GMAIL_USER=your-email@gmail.com
GMAIL_PASSKEY=your-app-password

# Telegram Configuration
TELEGRAM_BOT_TOKEN=your-bot-token
TELEGRAM_CHAT_ID=your-chat-id

# Database (Optional)
MONGODB_URI=your-mongodb-connection-string

# Dev.to Integration (Optional)
DEVTO_USERNAME=your-devto-username
```

### 3. Configure Gmail App Password
1. Enable 2-Factor Authentication on your Gmail account
2. Go to Google Account Settings → Security → 2-Step Verification
3. Generate an App Password for "Mail"
4. Use this 16-character password in `GMAIL_PASSKEY`

### 4. Set Up Telegram Bot
1. Message @BotFather on Telegram
2. Create a new bot with `/newbot`
3. Get your bot token and add to `TELEGRAM_BOT_TOKEN`
4. Get your chat ID by messaging @userinfobot
5. Add your chat ID to `TELEGRAM_CHAT_ID`

### 5. Customize Your Data
Update the following files with your information:

#### Personal Information
```javascript
// utils/data/personal-data.js
export const personalData = {
  name: "Your Name",
  profile: '/profile.png',
  designation: "Your Title",
  description: "Your bio...",
  email: 'your-email@gmail.com',
  phone: '+1234567890',
  address: 'Your Location',
  github: 'https://github.com/your-username',
  linkedIn: 'https://linkedin.com/in/your-profile',
  // ... other fields
}
```

### 6. Start Development
```bash
npm run dev
```

Visit `http://localhost:3001` to see your portfolio!

## 📁 Project Structure

```
developer-portfolio/
├── app/                          # Next.js 14 App Router
│   ├── components/              # React components
│   │   ├── homepage/           # Homepage sections
│   │   │   ├── about/         # About section
│   │   │   ├── blog/          # Blog section
│   │   │   ├── contact/       # Contact form
│   │   │   ├── education/     # Education timeline
│   │   │   ├── experience/    # Work experience
│   │   │   ├── hero-section/  # Hero/landing section
│   │   │   ├── projects/      # Projects showcase
│   │   │   ├── skills/        # Skills display
│   │   │   ├── certifications/ # Certifications
│   │   │   └── achievements/   # Achievements
│   │   └── helper/             # Utility components
│   ├── api/                    # API routes
│   ├── blog/                   # Blog pages
│   ├── css/                    # Stylesheets
│   ├── favicon.ico             # Site icon
│   ├── layout.js               # Root layout
│   └── page.js                 # Homepage
├── public/                      # Static assets
│   ├── image/                  # Images
│   ├── lottie/                 # Animation files
│   └── svg/                    # SVG icons
├── utils/                       # Utilities and data
│   ├── data/                   # Content data files
│   │   ├── personal-data.js    # Personal information
│   │   ├── experience.js       # Work experience
│   │   ├── projects-data.js    # Projects
│   │   ├── skills.js           # Technical skills
│   │   ├── educations.js       # Education history
│   │   ├── certifications.js   # Certifications
│   │   ├── achievements.js     # Achievements
│   │   ├── blog-posts.js       # Blog content
│   │   ├── testimonials.js     # Client testimonials
│   │   ├── services.js         # Services offered
│   │   ├── faqs.js            # FAQ content
│   │   ├── statistics.js       # Portfolio stats
│   │   └── social-links.js     # Social media links
│   └── skill-image.js          # Skill icon mapping
├── .env                        # Environment variables
├── next.config.js              # Next.js configuration
├── tailwind.config.js          # TailwindCSS config
├── package.json                # Dependencies
└── README.md                   # This file
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically on every push

### Environment Variables for Deployment
```env
GMAIL_USER=your-email@gmail.com
GMAIL_PASSKEY=your-gmail-app-password
TELEGRAM_BOT_TOKEN=your-telegram-bot-token
TELEGRAM_CHAT_ID=your-telegram-chat-id
```

## 📝 Content Management

### All content is managed through data files in `utils/data/`:

- **personal-data.js**: Your basic information, contact details, and social links
- **experience.js**: Professional work experience and job history
- **projects-data.js**: Portfolio projects with links and descriptions
- **skills.js**: Technical skills and technologies
- **educations.js**: Academic background and qualifications
- **certifications.js**: Professional certifications and credentials
- **achievements.js**: Awards, competitions, and notable accomplishments
- **blog-posts.js**: Blog articles and technical content

Simply update these files with your information and the portfolio will automatically reflect your changes.

## 🎨 Customization

### Colors and Theme
Modify colors in `tailwind.config.js`:
```javascript
colors: {
  primary: '#16f2b3',      // Main accent color
  secondary: '#8b5cf6',    // Secondary accent
}
```

### Adding New Sections
1. Create component in `app/components/homepage/`
2. Add data file in `utils/data/`
3. Import and use in `app/page.js`

## 🔧 API Features

### Contact Form
- Email notifications via Gmail SMTP
- Telegram instant notifications
- Form validation and error handling
- Success/failure feedback

### Blog Integration
- Fetches from dev.to API
- Falls back to local blog posts
- Dynamic routing for individual posts
- SEO optimized blog pages

## 📱 Responsive Design

The portfolio is fully responsive and tested on:
- Desktop (1920px+)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🔒 Security Features

- Environment variable protection
- CORS configuration
- Input validation and sanitization
- Rate limiting on API endpoints
- Secure contact form handling

## ⚡ Performance Optimizations

- Next.js Image optimization
- Lazy loading for components
- Efficient bundle splitting
- Optimized font loading
- Compressed assets

## 🧪 Testing

Run the development server and test:
```bash
npm run dev
```

Test contact form functionality:
1. Fill out the contact form
2. Check email for notifications
3. Check Telegram for instant messages
4. Verify error handling

## 📞 Support & Troubleshooting

### Common Issues

**Port 3000 in use**: The app will automatically try port 3001
**Gmail not working**: Ensure 2FA is enabled and app password is correct
**Telegram not working**: Verify bot token and chat ID are correct
**Environment variables**: Check `.env` file exists and variables are set

### Getting Help
1. Check the troubleshooting section
2. Review environment variable setup
3. Test API endpoints individually
4. Check browser console for errors

## 🤝 Contributing

Contributions welcome! Please:
1. Fork the repository
2. Create a feature branch
3. Test your changes
4. Submit a pull request

## 📄 License

MIT License - feel free to use this portfolio for your own projects!

## 🙏 Acknowledgments

Built with modern technologies and best practices for developers who want a professional online presence.

---

⭐ **Star this repository if it helped you create an amazing portfolio!**

**Happy coding!** 🚀
