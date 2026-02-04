# 🎨 Design System Reference

## Color Tokens

### Light Mode
```css
--background: #fafaf9
--foreground: #0a0a0a
--primary: #1a1a1a
--secondary: #6b6b6b
--accent: #d4af37
--accent-hover: #b8941f
--muted: #f5f5f4
--border: #e5e5e5
--card-bg: #ffffff
```

### Dark Mode
```css
--background: #0a0a0a
--foreground: #fafaf9
--primary: #ffffff
--secondary: #a3a3a3
--accent: #d4af37
--accent-hover: #f0c74d
--muted: #1a1a1a
--border: #262626
--card-bg: #141414
```

## Typography

### Font Families
- **Display**: 'Playfair Display', serif
- **Body**: 'Inter', sans-serif

### Font Sizes
- H1: clamp(2.5rem, 5vw, 5rem)
- H2: clamp(2rem, 4vw, 3.5rem)
- H3: clamp(1.5rem, 3vw, 2.5rem)
- H4: clamp(1.25rem, 2.5vw, 2rem)
- Body: clamp(1rem, 1.5vw, 1.125rem)

## Spacing Scale

```
--spacing-xs: 0.5rem   (8px)
--spacing-sm: 1rem     (16px)
--spacing-md: 1.5rem   (24px)
--spacing-lg: 2rem     (32px)
--spacing-xl: 3rem     (48px)
--spacing-2xl: 4rem    (64px)
--spacing-3xl: 6rem    (96px)
```

## Border Radius

```
--radius-sm: 0.375rem  (6px)
--radius-md: 0.5rem    (8px)
--radius-lg: 0.75rem   (12px)
--radius-xl: 1rem      (16px)
--radius-2xl: 1.5rem   (24px)
```

## Shadows

```css
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05)
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1)
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1)
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1)
--shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25)
```

## Transitions

```css
--transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1)
--transition-base: 300ms cubic-bezier(0.4, 0, 0.2, 1)
--transition-slow: 500ms cubic-bezier(0.4, 0, 0.2, 1)
--transition-smooth: 700ms cubic-bezier(0.16, 1, 0.3, 1)
```

## Glassmorphism

```css
.glass {
  background: var(--glass-bg);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid var(--glass-border);
  box-shadow: var(--glass-shadow);
}
```

## Component Patterns

### Button Variants
- **Primary**: Gold background, white text
- **Secondary**: Card background with border
- **Outline**: Transparent with gold border
- **Ghost**: Transparent with hover effect

### Animation Patterns
- **Fade In**: Opacity 0 → 1, translateY(20px) → 0
- **Slide In**: translateX(-100%) → 0
- **Scale In**: scale(0.9) → 1
- **Stagger**: Delay children by 0.1s

## Responsive Design

### Breakpoints
```
Mobile: < 640px
Tablet: 641px - 1024px
Desktop: > 1024px
```

### Container Padding
- Mobile: 1.5rem (24px)
- Desktop: 3rem (48px)

## Accessibility

### Focus States
```css
outline: 2px solid var(--accent);
outline-offset: 2px;
```

### Color Contrast
- All text meets WCAG AA standards
- Interactive elements have clear hover states
- Focus indicators are visible

## Best Practices

1. **Use CSS Variables**: Always use design tokens
2. **Maintain Consistency**: Follow the spacing scale
3. **Smooth Transitions**: Use predefined transition values
4. **Responsive First**: Design for mobile, enhance for desktop
5. **Accessibility**: Ensure keyboard navigation and screen reader support
