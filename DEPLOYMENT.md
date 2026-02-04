# 🚀 Deployment Guide

## Quick Deploy Options

### 1. Vercel (Recommended)

Vercel is the easiest way to deploy Next.js applications.

#### Steps:
1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Click "Deploy"

That's it! Your site will be live in minutes.

#### Custom Domain
1. Go to your project settings in Vercel
2. Navigate to "Domains"
3. Add your custom domain
4. Update DNS records as instructed

### 2. Netlify

#### Steps:
1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy**
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `.next` folder
   - Or connect your GitHub repository

### 3. AWS Amplify

#### Steps:
1. **Install Amplify CLI**
   ```bash
   npm install -g @aws-amplify/cli
   ```

2. **Initialize Amplify**
   ```bash
   amplify init
   ```

3. **Deploy**
   ```bash
   amplify publish
   ```

### 4. Docker

#### Dockerfile
```dockerfile
FROM node:18-alpine AS base

# Install dependencies
FROM base AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

# Build the application
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

#### Build and Run
```bash
docker build -t art-gallery .
docker run -p 3000:3000 art-gallery
```

## Environment Variables

Create a `.env.local` file for local development:

```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://yoursite.com
NEXT_PUBLIC_SITE_NAME=BOYD Art Gallery

# Analytics (Optional)
NEXT_PUBLIC_GA_ID=your-google-analytics-id

# Contact Form (Optional)
NEXT_PUBLIC_FORM_ENDPOINT=your-form-endpoint

# Email Service (Optional)
EMAIL_SERVICE_API_KEY=your-api-key
```

## Performance Optimization

### 1. Image Optimization
- Use Next.js Image component
- Serve images in WebP format
- Implement lazy loading

### 2. Code Splitting
- Already handled by Next.js
- Use dynamic imports for heavy components

### 3. Caching
- Configure CDN caching headers
- Use ISR (Incremental Static Regeneration)

### 4. Analytics
Add Google Analytics or Vercel Analytics:

```tsx
// app/layout.tsx
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

## SEO Checklist

- [x] Meta tags configured
- [x] Open Graph tags added
- [x] Semantic HTML structure
- [x] Mobile-friendly design
- [ ] Add sitemap.xml
- [ ] Add robots.txt
- [ ] Submit to Google Search Console
- [ ] Add structured data (JSON-LD)

### Generate Sitemap

Create `app/sitemap.ts`:

```typescript
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://yoursite.com',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://yoursite.com/gallery',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
  ];
}
```

### Robots.txt

Create `app/robots.ts`:

```typescript
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://yoursite.com/sitemap.xml',
  };
}
```

## Monitoring

### 1. Error Tracking
Integrate Sentry:

```bash
npm install @sentry/nextjs
```

### 2. Performance Monitoring
- Use Vercel Analytics
- Google PageSpeed Insights
- Lighthouse CI

### 3. Uptime Monitoring
- UptimeRobot
- Pingdom
- StatusCake

## Security

### Headers Configuration

Create `next.config.ts`:

```typescript
const nextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
        ],
      },
    ];
  },
};

export default nextConfig;
```

## Post-Deployment

1. **Test on Multiple Devices**
   - Mobile phones
   - Tablets
   - Desktop browsers

2. **Performance Audit**
   - Run Lighthouse
   - Check Core Web Vitals
   - Optimize as needed

3. **SEO Setup**
   - Submit sitemap to Google
   - Verify domain ownership
   - Set up Google Analytics

4. **Monitoring**
   - Set up error tracking
   - Configure uptime monitoring
   - Enable analytics

## Troubleshooting

### Build Errors
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### Port Already in Use
```bash
# Kill process on port 3000
npx kill-port 3000
```

### Module Not Found
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

---

**Need Help?** Check the [Next.js Documentation](https://nextjs.org/docs) or [Vercel Support](https://vercel.com/support)
