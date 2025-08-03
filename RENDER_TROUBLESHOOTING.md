# 502 Bad Gateway Error Fix - Render पर

## 🚨 Problem: 502 Bad Gateway Error
आपका website deploy तो हो गया है लेकिन 502 error aa raha hai.

## 🔧 Step-by-Step Solution:

### Step 1: Render Dashboard में जाएं
1. [render.com](https://render.com) पर login करें
2. अपनी service `pind-daan-website` पर click करें
3. **"Logs"** tab पर जाएं
4. Build logs और Runtime logs check करें

### Step 2: Build Logs में Error देखें
Build logs में ye check करें:
- ✅ `npm install` successful हुआ?
- ✅ `npm run build` successful हुआ?
- ❌ कोई error message तो नहीं aa raha?

### Step 3: Runtime Logs Check करें
Runtime logs में ye check करें:
- ✅ `npm start` successful हुआ?
- ❌ Port configuration सही है?
- ❌ Environment variables missing तो नहीं?

---

## 🛠️ Common Fixes:

### Fix 1: package.json में Scripts Update करें
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start -p $PORT",
    "lint": "next lint"
  }
}
```

### Fix 2: next.config.js Update करें
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
  output: 'standalone',
  compress: true,
  poweredByHeader: false
}

module.exports = nextConfig
```

### Fix 3: Environment Variables Add करें
Render dashboard में Environment Variables add करें:
```
NODE_ENV=production
PORT=10000
```

### Fix 4: Build Command Update करें
Render dashboard में Build Command change करें:
```
npm install && npm run build
```

### Fix 5: Start Command Update करें
Render dashboard में Start Command change करें:
```
npm start
```

---

## 🔍 Detailed Troubleshooting:

### 1. Check Build Logs
Render dashboard → Logs → Build logs में देखें:
```
npm install
npm run build
```

### 2. Check Runtime Logs
Render dashboard → Logs → Runtime logs में देखें:
```
npm start
```

### 3. Check Service Status
- Service status "Live" है?
- Health check passing है?

### 4. Check Dependencies
package.json में सभी dependencies present हैं:
```json
{
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "framer-motion": "^10.0.0",
    "lucide-react": "^0.294.0",
    "react-hot-toast": "^2.4.1"
  }
}
```

---

## 🚀 Quick Fix Commands:

### Local में Test करें:
```bash
npm install
npm run build
npm start
```

### अगर Local में भी error आए:
```bash
# node_modules delete करें
rm -rf node_modules
rm package-lock.json

# फिर से install करें
npm install
npm run build
npm start
```

---

## 📞 Render Support:

अगर problem solve नहीं हो रहा तो:
1. Render dashboard में **"Support"** पर click करें
2. Error logs screenshot लें
3. Detailed description लिखें
4. Support ticket create करें

---

## ✅ Success Checklist:

- [ ] Build logs में कोई error नहीं
- [ ] Runtime logs में कोई error नहीं
- [ ] Service status "Live" है
- [ ] Environment variables set हैं
- [ ] Port configuration सही है
- [ ] Dependencies सभी install हैं

**Website successfully live हो जाने के बाद batayein! 🙏** 