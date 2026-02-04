# 🎨 BOYD - Premium Online Art Gallery

A stunning, enterprise-grade art gallery website built with modern web technologies. Inspired by premium art galleries, this project showcases best practices in web development with smooth animations, glassmorphism effects, and responsive design.

## 🚀 Tech Stack

### Core Technologies
- **Next.js 14+** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Advanced animations and transitions

### Additional Libraries
- **Lucide React** - Beautiful icon library
- **React Intersection Observer** - Scroll-based animations
- **Radix UI** - Accessible component primitives
- **Class Variance Authority** - Component variant management

## ✨ Features

### Premium Design
- 🎭 **Glassmorphism Effects** - Modern frosted glass UI elements
- 🌈 **Gradient Accents** - Eye-catching gold gradient highlights
- 🌙 **Dark Mode Support** - Automatic dark/light theme switching
- ✨ **Smooth Animations** - Framer Motion powered transitions
- 📱 **Fully Responsive** - Perfect on all devices

### Sections
1. **Hero Section**
   - Animated background gradients
   - Staggered text animations
   - Statistics showcase
   - Scroll indicator

2. **Gallery Section**
   - Category filtering
   - Hover effects with overlay
   - Responsive grid layout
   - Image optimization

3. **About Section**
   - Company information
   - Feature highlights
   - Trust badges
   - Statistics display

4. **Contact Section**
   - Interactive form
   - Contact information cards
   - Social media links
   - Success state animation

5. **Footer**
   - Newsletter subscription
   - Quick links
   - Social media integration
   - Legal information

### Performance & SEO
- ⚡ **Optimized Performance** - Fast page loads
- 🔍 **SEO Optimized** - Proper meta tags and structure
- ♿ **Accessible** - WCAG compliant
- 📊 **Analytics Ready** - Easy integration

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone or navigate to the project**
   ```bash
   cd art-gallery
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
art-gallery/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page component
│   └── globals.css         # Global styles & design tokens
├── components/
│   ├── ui/
│   │   └── Button.tsx      # Reusable button component
│   ├── Navbar.tsx          # Navigation with scroll effects
│   ├── Hero.tsx            # Hero section
│   ├── Gallery.tsx         # Gallery with filtering
│   ├── About.tsx           # About section
│   ├── Contact.tsx         # Contact form
│   └── Footer.tsx          # Footer component
├── lib/
│   └── utils.ts            # Utility functions
└── public/                 # Static assets
```

## 🎨 Design System

### Color Palette
- **Primary**: Gold (#d4af37)
- **Background**: Light (#fafaf9) / Dark (#0a0a0a)
- **Accent**: Gold gradient
- **Text**: Dynamic based on theme

### Typography
- **Display Font**: Playfair Display (Headings)
- **Body Font**: Inter (Body text)

### Spacing Scale
- XS: 0.5rem
- SM: 1rem
- MD: 1.5rem
- LG: 2rem
- XL: 3rem
- 2XL: 4rem
- 3XL: 6rem

## 🔧 Customization

### Update Content
Edit the component files in `/components` to customize:
- Artwork data in `Gallery.tsx`
- Company information in `About.tsx`
- Contact details in `Contact.tsx` and `Footer.tsx`

### Modify Design
Update design tokens in `app/globals.css`:
- Colors
- Fonts
- Spacing
- Shadows
- Transitions

### Add New Sections
1. Create component in `/components`
2. Import in `app/page.tsx`
3. Add to the main layout

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 641px - 1024px
- **Desktop**: > 1024px

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is created for demonstration purposes.

## 🤝 Contributing

Feel free to fork and customize this project for your own use!

## 📞 Support

For questions or support, contact:
- Email: [email protected]
- Phone: +971 (50) 516 71 17

---

**Built with ❤️ using Next.js, TypeScript, and Framer Motion**
