# पिंड दान सेवा - Pind Daan Services

A modern, spiritual-themed website for Hindu religious services focused on 'Pind Daan' in Gaya, India. This website features a beautiful UI/UX design with soft saffron, gold, and ivory color palettes, serene religious imagery, and elegant Devanagari typography.

## 🌟 Features

### Design & UI/UX
- **Spiritual Color Palette**: Soft saffron, gold, and ivory colors
- **Modern Design**: Clean, responsive layout optimized for elderly users
- **Devanagari Typography**: Elegant Sanskrit text and mantras
- **Smooth Animations**: Advanced UI transitions using Framer Motion
- **Micro-interactions**: Engaging user experience with GSAP animations

### Sections
- **Hero Section**: Beautiful landing with spiritual imagery
- **About Pind Daan**: Educational content about the ritual
- **Booking Priest**: Priest profiles and booking system
- **Ritual Packages**: Different service packages with pricing
- **Photo Gallery**: Spiritual imagery and temple photos
- **Testimonials**: Customer reviews and feedback
- **Online Booking**: Comprehensive booking form
- **WhatsApp Integration**: Floating chat button

### Technical Features
- **Responsive Design**: Mobile-first approach
- **Accessibility**: Elderly-friendly interface
- **Performance**: Optimized loading and animations
- **SEO Optimized**: Meta tags and structured data
- **Real-time Chat**: WhatsApp integration

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd pind-daan-services
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS with custom spiritual theme
- **Animations**: Framer Motion & GSAP
- **Icons**: Lucide React
- **Notifications**: React Hot Toast
- **Fonts**: Noto Sans Devanagari (Google Fonts)

## 📁 Project Structure

```
pind-daan-services/
├── app/
│   ├── globals.css          # Global styles and spiritual theme
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main page component
├── components/
│   ├── Header.tsx           # Navigation header
│   ├── Hero.tsx             # Hero section with animations
│   ├── AboutPindDaan.tsx    # About section
│   ├── BookingPriest.tsx    # Priest booking section
│   ├── RitualPackages.tsx   # Service packages
│   ├── PhotoGallery.tsx     # Image gallery
│   ├── Testimonials.tsx     # Customer reviews
│   ├── OnlineBooking.tsx    # Booking form
│   ├── WhatsAppButton.tsx   # Floating chat button
│   └── Footer.tsx           # Footer with contact info
├── tailwind.config.js       # Custom spiritual color palette
├── package.json             # Dependencies and scripts
└── README.md               # Project documentation
```

## 🎨 Design System

### Color Palette
- **Saffron**: `#f97316` - Primary spiritual color
- **Gold**: `#f59e0b` - Secondary accent
- **Ivory**: `#f5f2ec` - Light background
- **Dark Gold**: `#78350f` - Text and emphasis

### Typography
- **Devanagari**: Noto Sans Devanagari for Sanskrit text
- **English**: Inter for body text
- **Hierarchy**: Clear typography scale for readability

### Animations
- **Fade In**: Smooth opacity transitions
- **Slide Up**: Content reveals from bottom
- **Scale**: Hover effects on interactive elements
- **Float**: Continuous gentle movement

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🚀 Deployment

### Build for Production
```bash
npm run build
npm start
```

### Environment Variables
Create a `.env.local` file:
```env
NEXT_PUBLIC_SITE_URL=your-domain.com
NEXT_PUBLIC_WHATSAPP_NUMBER=919876543210
```

## 🔧 Customization

### Colors
Edit `tailwind.config.js` to modify the spiritual color palette:
```javascript
colors: {
  saffron: { /* saffron shades */ },
  gold: { /* gold shades */ },
  ivory: { /* ivory shades */ },
  spiritual: { /* spiritual theme colors */ }
}
```

### Content
- Update priest information in `BookingPriest.tsx`
- Modify packages in `RitualPackages.tsx`
- Change testimonials in `Testimonials.tsx`
- Update contact information in footer

### Images
Replace placeholder images with actual temple and ceremony photos:
- Hero background
- Gallery images
- Priest photos
- Temple architecture

## 📞 Contact Information

- **Phone**: +91 98765 43210
- **Email**: info@pinddaanservices.com
- **Address**: Vishnupad Temple, Gaya, Bihar, India
- **Timings**: 6:00 AM - 8:00 PM (Daily)

## 🙏 Spiritual Authenticity

This website maintains spiritual authenticity by:
- Using traditional Sanskrit mantras
- Incorporating sacred imagery
- Following Vedic color symbolism
- Respecting cultural traditions
- Providing accurate ritual information

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

**ॐ नमः शिवाय** - Om Namah Shivaya

*May this digital platform serve as a bridge between the ancient traditions and modern seekers of spiritual peace.* 