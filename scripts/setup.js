#!/usr/bin/env node

/**
 * Portfolio Setup Script
 * This script helps configure the portfolio with initial setup
 */

const fs = require('fs');
const path = require('path');

function setupPortfolio() {
  console.log('\n🚀 Welcome to Developer Portfolio Setup!');
  console.log('This script will help you configure your portfolio.\n');

  try {
    // Check if .env exists
    const envPath = path.join(process.cwd(), '.env');
    const envExamplePath = path.join(process.cwd(), '.env.example');

    console.log('✅ Environment file already exists!');
    console.log('📄 Located at:', envPath);

    console.log('\n📝 Configuration Checklist:');
    console.log('1. ✅ Edit utils/data/personal-data.js with your information');
    console.log('2. ✅ Edit utils/data/projects-data.js with your projects');
    console.log('3. ✅ Edit utils/data/experience.js with your work experience');
    console.log('4. ✅ Edit utils/data/educations.js with your education');
    console.log('5. ✅ Edit utils/data/skills.js with your skills');
    console.log('6. 🔧 Configure .env file with your API keys');

    console.log('\n📧 Contact Form Setup Required:');
    console.log('To enable the contact form, you need to configure:');
    console.log('');
    console.log('🔑 Gmail App Password:');
    console.log('   1. Go to: https://myaccount.google.com/security');
    console.log('   2. Enable 2-Step Verification');
    console.log('   3. Generate App Password for "Mail"');
    console.log('   4. Update GMAIL_PASSKEY in .env file');
    console.log('');
    console.log('🤖 Telegram Bot:');
    console.log('   1. Message @BotFather on Telegram');
    console.log('   2. Create new bot with /newbot');
    console.log('   3. Get bot token and chat ID');
    console.log('   4. Update TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID in .env');
    console.log('');
    console.log('📊 Google Analytics (Optional):');
    console.log('   1. Create GTM account');
    console.log('   2. Update NEXT_PUBLIC_GTM in .env');

    console.log('\n� Current Environment Status:');
    const env = fs.readFileSync(envPath, 'utf8');
    
    const checks = [
      { name: 'GTM ID', key: 'NEXT_PUBLIC_GTM=GTM-', status: env.includes('NEXT_PUBLIC_GTM=GTM-X') ? '❌ Needs setup' : '✅ Configured' },
      { name: 'App URL', key: 'NEXT_PUBLIC_APP_URL', status: env.includes('localhost:3000') ? '✅ Set for development' : '❌ Needs setup' },
      { name: 'Telegram Bot', key: 'TELEGRAM_BOT_TOKEN', status: env.includes('your_telegram_bot_token') ? '❌ Needs setup' : '✅ Configured' },
      { name: 'Gmail Password', key: 'GMAIL_PASSKEY', status: env.includes('your_gmail_app_password') ? '❌ Needs setup' : '✅ Configured' },
      { name: 'Email Address', key: 'EMAIL_ADDRESS', status: env.includes('your_email@gmail.com') ? '❌ Needs setup' : '✅ Configured' }
    ];

    checks.forEach(check => {
      console.log(`   ${check.status} ${check.name}`);
    });

    console.log('\n🎉 Setup Information Displayed!');
    console.log('\n📝 Next Steps:');
    console.log('1. Edit your .env file with real values');
    console.log('2. Run: npm run dev');
    console.log('3. Open: http://localhost:3000');
    console.log('4. Customize your content in the utils/data folder');
    console.log('\n📚 For detailed instructions, see SETUP_GUIDE.md');

  } catch (error) {
    console.error('❌ Setup failed:', error.message);
    process.exit(1);
  }
}

if (require.main === module) {
  setupPortfolio();
}

module.exports = { setupPortfolio };
