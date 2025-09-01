# 🔐 Credential Recovery Guide

## 1. Create New Telegram Bot

### Steps:
1. Open Telegram and search for `@BotFather`
2. Start a chat and use `/newbot` command
3. Choose a name for your bot (e.g., "Portfolio Contact Bot")
4. Choose a unique username ending with "bot" (e.g., "portfolio_contact_bot")
5. Copy the new bot token provided
6. Message your new bot to get started
7. Get your chat ID by visiting: `https://api.telegram.org/bot<YOUR_NEW_TOKEN>/getUpdates`

### Update .env file:
```bash
TELEGRAM_BOT_TOKEN=your-new-bot-token-here
TELEGRAM_CHAT_ID=your-chat-id-here
```

## 2. Create New Gmail App Password

### Steps:
1. Go to [Google Account Settings](https://myaccount.google.com/)
2. Navigate to Security → 2-Step Verification
3. Scroll down to "App passwords"
4. Select "Mail" from dropdown
5. Choose "Other (Custom name)" and enter "Portfolio Website"
6. Click "Generate"
7. Copy the 16-character password

### Update .env file:
```bash
GMAIL_PASSKEY=your-new-16-character-password
EMAIL_ADDRESS=your-email@gmail.com
```

## 3. Test Your New Configuration

Run the contact form test to ensure everything works with new credentials.

## 4. Git Security Commands

```bash
# Check if any sensitive files are tracked
git ls-files | grep -E "\.(env|key|pem)$"

# Remove from git history if found (DANGEROUS - rewrites history)
git filter-branch --force --index-filter 'git rm --cached --ignore-unmatch .env.production.example' --prune-empty --tag-name-filter cat -- --all

# Push changes
git add .
git commit -m "SECURITY: Remove exposed credentials and update templates"
git push origin main
```

## 5. Future Security Measures

1. **Never commit real credentials**
2. **Use example/template files only**
3. **Review commits before pushing**
4. **Enable GitHub secret scanning**
5. **Use environment variable services for production**

## ⚠️ IMPORTANT
Your old credentials are permanently compromised. Anyone with access to the GitHub repository history can see them. Make sure to:
- Revoke old Telegram bot
- Delete old Gmail app password  
- Monitor for unauthorized usage
- Consider rotating email account if needed
