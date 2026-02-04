# 🧩 Component Library

## Button Component

### Usage
```tsx
import { Button } from "@/components/ui/Button";

// Primary button
<Button variant="primary" size="md">
  Click Me
</Button>

// Outline button
<Button variant="outline" size="lg">
  Learn More
</Button>
```

### Variants
- `primary` - Gold background, white text
- `secondary` - Card background with border
- `outline` - Transparent with gold border
- `ghost` - Transparent with hover effect

### Sizes
- `sm` - Small (px-4 py-2)
- `md` - Medium (px-6 py-3)
- `lg` - Large (px-8 py-4)

### Features
- Framer Motion animations
- Hover scale effect
- Tap feedback
- Disabled state
- Focus indicators

---

## Navbar Component

### Features
- Sticky positioning
- Scroll-based styling
- Glassmorphism effect
- Mobile menu
- Smooth animations

### Behavior
- Transparent when at top
- Glass effect on scroll
- Auto-close mobile menu on link click
- Smooth scroll to sections

---

## Hero Component

### Features
- Animated background gradients
- Staggered text animations
- Statistics showcase
- CTA buttons
- Scroll indicator

### Animations
- Container fade in
- Staggered children
- Floating background orbs
- Bouncing scroll indicator

---

## Gallery Component

### Features
- Category filtering
- Responsive grid
- Hover overlays
- Image optimization
- Action buttons

### Interactions
- Filter by category
- Hover for actions
- View/Like/Share buttons
- Smooth transitions

### Data Structure
```typescript
interface Artwork {
  id: number;
  title: string;
  artist: string;
  price: string;
  category: string;
  image: string;
}
```

---

## About Component

### Features
- Company information
- Feature cards
- Statistics grid
- Trust badges
- Glassmorphism effects

### Sections
1. Company story
2. Feature highlights
3. Statistics
4. Trust badges

---

## Contact Component

### Features
- Interactive form
- Form validation
- Success state
- Contact cards
- Social links

### Form Fields
- Name (required)
- Email (required)
- Phone (optional)
- Message (required)

### States
- Default
- Submitting
- Success
- Error

---

## Footer Component

### Features
- Newsletter subscription
- Navigation links
- Contact information
- Social media links
- Legal links

### Sections
1. Brand & description
2. Quick links
3. Newsletter
4. Bottom bar

---

## Utility Classes

### Glass Effect
```tsx
<div className="glass">
  Content with glassmorphism
</div>
```

### Gradient Text
```tsx
<span className="gradient-text">
  Gold gradient text
</span>
```

### Reveal Animation
```tsx
<div className="reveal">
  Animates on scroll
</div>
```

### Container
```tsx
<div className="container">
  Max-width content
</div>
```

### Section
```tsx
<section className="section">
  Proper vertical spacing
</section>
```

---

## Animation Patterns

### Fade In
```tsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  Content
</motion.div>
```

### Stagger Children
```tsx
<motion.div
  variants={containerVariants}
  initial="hidden"
  animate="visible"
>
  {items.map(item => (
    <motion.div variants={itemVariants}>
      {item}
    </motion.div>
  ))}
</motion.div>
```

### Hover Scale
```tsx
<motion.div
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  Interactive element
</motion.div>
```

### Scroll Reveal
```tsx
const [ref, inView] = useInView({
  triggerOnce: true,
  threshold: 0.1,
});

<motion.div
  ref={ref}
  initial={{ opacity: 0 }}
  animate={inView ? { opacity: 1 } : {}}
>
  Content
</motion.div>
```

---

## Best Practices

### Component Structure
1. Import dependencies
2. Define interfaces
3. Component logic
4. Return JSX
5. Export component

### Naming Conventions
- Components: PascalCase
- Files: PascalCase.tsx
- Props: camelCase
- CSS classes: kebab-case

### Performance
- Use React.memo for expensive components
- Lazy load heavy components
- Optimize images
- Minimize re-renders

### Accessibility
- Use semantic HTML
- Add ARIA labels
- Ensure keyboard navigation
- Maintain color contrast
- Provide focus indicators

---

## Creating New Components

### Template
```tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface YourComponentProps {
  // Define props
}

const YourComponent: React.FC<YourComponentProps> = ({
  // Destructure props
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="your-classes"
    >
      {/* Component content */}
    </motion.div>
  );
};

export default YourComponent;
```

### Steps
1. Create file in `/components`
2. Define TypeScript interface
3. Implement component logic
4. Add animations
5. Style with Tailwind
6. Export component
7. Import in page

---

## Testing Components

### Manual Testing
1. Visual inspection
2. Responsive testing
3. Interaction testing
4. Accessibility testing
5. Performance testing

### Automated Testing (Future)
```bash
npm install --save-dev @testing-library/react
npm install --save-dev @testing-library/jest-dom
```

---

**Component library built with React, TypeScript, and Framer Motion** ✨
