# Setup Instructions for Pind Daan Services Website

## Prerequisites Installation

### 1. Install Node.js
1. Go to [https://nodejs.org/](https://nodejs.org/)
2. Download the LTS version (recommended for most users)
3. Run the installer and follow the installation steps
4. Verify installation by opening a new terminal/command prompt and running:
   ```bash
   node --version
   npm --version
   ```

### 2. Install Git (if not already installed)
1. Go to [https://git-scm.com/](https://git-scm.com/)
2. Download and install Git
3. Verify installation:
   ```bash
   git --version
   ```

## Project Setup

### 1. Open Terminal/Command Prompt
- Press `Win + R`, type `cmd` and press Enter
- Or open PowerShell

### 2. Navigate to Project Directory
```bash
cd "C:\Users\Bobby kumar\Desktop\pind"
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Start Development Server
```bash
npm run dev
```

### 5. Open Website
- Open your web browser
- Go to [http://localhost:3000](http://localhost:3000)

## Troubleshooting

### If npm is not recognized:
1. Restart your terminal/command prompt after installing Node.js
2. Or restart your computer
3. Make sure Node.js is added to your system PATH

### If you get permission errors:
1. Run terminal as Administrator
2. Or use:
   ```bash
   npm install --force
   ```

### If you get network errors:
1. Check your internet connection
2. Try using a different npm registry:
   ```bash
   npm config set registry https://registry.npmjs.org/
   ```

## Project Features

Once the website is running, you'll see:

### 🌟 Main Features
- **Beautiful Hero Section** with spiritual imagery and Sanskrit mantras
- **About Pind Daan** section explaining the sacred ritual
- **Priest Booking** with profiles and ratings
- **Ritual Packages** with different pricing tiers
- **Photo Gallery** with temple and ceremony images
- **Customer Testimonials** with ratings
- **Online Booking Form** for easy scheduling
- **WhatsApp Integration** for instant chat
- **Responsive Design** that works on all devices

### 🎨 Design Elements
- **Spiritual Color Palette**: Saffron, gold, and ivory
- **Devanagari Typography**: Elegant Sanskrit text
- **Smooth Animations**: Framer Motion transitions
- **Micro-interactions**: Engaging hover effects
- **Elderly-friendly**: Large text and clear navigation

### 📱 Sections Included
1. **Header**: Navigation with logo and contact info
2. **Hero**: Landing section with call-to-action
3. **About**: Educational content about Pind Daan
4. **Booking**: Priest profiles and selection
5. **Packages**: Service offerings and pricing
6. **Gallery**: Photo showcase
7. **Testimonials**: Customer reviews
8. **Booking Form**: Online reservation system
9. **Footer**: Contact information and links
10. **WhatsApp Button**: Floating chat widget

## Customization

### Update Content
- Edit priest information in `components/BookingPriest.tsx`
- Modify packages in `components/RitualPackages.tsx`
- Change testimonials in `components/Testimonials.tsx`
- Update contact details in `components/Footer.tsx`

### Change Colors
Edit `tailwind.config.js` to modify the spiritual color palette:
```javascript
spiritual: {
  primary: '#f97316', // Saffron
  secondary: '#f59e0b', // Gold
  accent: '#f5f2ec', // Ivory
  dark: '#78350f', // Dark gold
}
```

### Replace Images
Replace placeholder images with actual photos:
- Hero background images
- Priest profile photos
- Temple and ceremony images
- Gallery photos

## Next Steps

1. **Customize Content**: Update text and images to match your specific services
2. **Add Real Photos**: Replace placeholder images with actual temple and ceremony photos
3. **Update Contact Info**: Change phone numbers and email addresses
4. **Deploy**: Host the website on platforms like Vercel, Netlify, or your own server

## Support

If you encounter any issues:
1. Make sure Node.js is properly installed
2. Check that all dependencies are installed
3. Verify you're in the correct directory
4. Try restarting the development server

---

**ॐ नमः शिवाय** - Om Namah Shivaya

*May this website serve as a bridge between ancient traditions and modern seekers of spiritual peace.* 