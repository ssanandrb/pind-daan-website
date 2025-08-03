# Render Deployment Guide - पिंड दान वेबसाइट

## 🚀 Render पर Deploy करने के लिए Step-by-Step Guide

### Prerequisites (पहले से जरूरी चीजें)
1. **GitHub Account** - अगर नहीं है तो बनाएं
2. **Render Account** - [render.com](https://render.com) पर sign up करें
3. **Node.js** - अगर अभी तक install नहीं किया है तो पहले करें

---

## Step 1: GitHub पर Code Push करें

### 1.1 GitHub Repository बनाएं
```bash
# अगर Git नहीं है तो पहले install करें
# फिर अपने project folder में जाएं
cd "C:\Users\Bobby kumar\Desktop\pind"

# Git initialize करें
git init

# सभी files add करें
git add .

# पहला commit करें
git commit -m "Initial commit - Pind Daan website"

# GitHub पर नई repository बनाएं और फिर push करें
git remote add origin https://github.com/YOUR_USERNAME/pind-daan-website.git
git branch -M main
git push -u origin main
```

### 1.2 .gitignore File बनाएं
```bash
# .gitignore file बनाएं
echo "node_modules/
.next/
.env
.env.local
.DS_Store
*.log" > .gitignore
```

---

## Step 2: Render पर Deploy करें

### 2.1 Render Dashboard पर जाएं
1. [render.com](https://render.com) पर जाएं
2. Sign up करें या login करें
3. Dashboard पर जाएं

### 2.2 New Web Service बनाएं
1. **"New +"** button पर click करें
2. **"Web Service"** select करें
3. **"Connect a repository"** पर click करें
4. GitHub से अपनी repository connect करें

### 2.3 Service Configuration
```
Name: pind-daan-website
Environment: Node
Build Command: npm install && npm run build
Start Command: npm start
```

### 2.4 Environment Variables (अगर जरूरी हो)
अगर आपके पास environment variables हैं तो add करें:
- `NODE_ENV=production`
- `NEXT_PUBLIC_SITE_URL=https://your-app-name.onrender.com`

---

## Step 3: Build Settings Configure करें

### 3.1 package.json में Scripts Check करें
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}
```

### 3.2 next.config.js Update करें (अगर जरूरी हो)
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
    unoptimized: true
  },
  output: 'standalone'
}

module.exports = nextConfig
```

---

## Step 4: Deploy करें

### 4.1 Create Web Service
1. **"Create Web Service"** पर click करें
2. Render automatically build शुरू कर देगा
3. Build process में 5-10 minutes लग सकते हैं

### 4.2 Build Logs Monitor करें
- Build logs देखें कि कोई error तो नहीं आ रहा
- अगर error आए तो fix करें और फिर से deploy करें

---

## Step 5: Custom Domain Setup (Optional)

### 5.1 Custom Domain Add करें
1. Render dashboard में अपनी service पर click करें
2. **"Settings"** tab पर जाएं
3. **"Custom Domains"** section में जाएं
4. अपना domain add करें

### 5.2 DNS Configuration
अपने domain provider के DNS settings में:
```
Type: CNAME
Name: www
Value: your-app-name.onrender.com
```

---

## Troubleshooting (समस्याओं का समाधान)

### Build Fail हो रहा है?
```bash
# Local में test करें
npm run build

# अगर error आए तो fix करें
npm install
npm run build
```

### Dependencies Missing?
```bash
# package.json में सभी dependencies check करें
npm install
npm run build
```

### Environment Variables Issues?
- Render dashboard में environment variables add करें
- `.env` file को `.gitignore` में add करें

### Performance Issues?
```javascript
// next.config.js में optimize करें
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
    unoptimized: true
  },
  output: 'standalone',
  compress: true,
  poweredByHeader: false
}
```

---

## Deployment Checklist ✅

- [ ] GitHub repository बना दिया
- [ ] Code push कर दिया
- [ ] Render account बना दिया
- [ ] Web service create कर दिया
- [ ] Build successful हो गया
- [ ] Website live हो गई
- [ ] Custom domain setup कर दिया (optional)
- [ ] WhatsApp button working है
- [ ] All forms working हैं
- [ ] Mobile responsive है

---

## Important Notes 📝

1. **Free Tier Limitations**: Render free tier में कुछ limitations हैं
2. **Auto Deploy**: हर commit के बाद automatically deploy हो जाएगा
3. **Build Time**: पहली बार build में time लग सकता है
4. **SSL Certificate**: Render automatically SSL provide करता है

---

## Support 🆘

अगर कोई problem आए तो:
1. Render logs check करें
2. Local में test करें
3. GitHub issues check करें
4. Render documentation पढ़ें

**Happy Deployment! 🚀🙏** 