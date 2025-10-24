# Business Analyst Portfolio - Sarah Mitchell

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS, showcasing business analysis expertise, projects, and professional skills.

## Features

### 🎨 Design & UX
- **Responsive Design**: Fully responsive layout that works seamlessly across desktop, tablet, and mobile devices
- **Smooth Animations**: Motion-based animations using Motion/React for engaging user experience
- **Modern UI**: Clean, professional design with gradient backgrounds and smooth scrolling
- **Accessibility**: WCAG 2.1 compliant with proper ARIA labels, semantic HTML, and keyboard navigation

### 🔧 Technical Features
- **SEO Optimized**: Meta tags, Open Graph, Twitter Cards for better search engine visibility
- **Error Boundary**: Graceful error handling with user-friendly error messages
- **Skip to Content**: Accessibility feature for keyboard navigation
- **Performance**: Optimized images with fallback handling
- **Type Safe**: Built with TypeScript for better code quality and maintainability

### 📱 Sections
- **Hero**: Eye-catching introduction with call-to-action buttons
- **About**: Professional background and expertise overview
- **Skills**: Categorized BA skills including:
  - Data Analysis & Visualization
  - Requirements Engineering
  - Process Modeling
  - Project Management
  - Business Intelligence
  - Methodologies & Tools
- **Projects**: Featured case studies with measurable business impact
- **Contact**: Interactive contact form with social links

## Tech Stack

- **Framework**: React 18+ with TypeScript
- **Styling**: Tailwind CSS 4.0
- **Animations**: Motion/React (formerly Framer Motion)
- **UI Components**: Shadcn/ui
- **Icons**: Lucide React
- **Form Handling**: React Hook Form with validation
- **Notifications**: Sonner toast library

## Production Readiness Checklist

### ✅ Implemented
- [x] Error boundaries for graceful error handling
- [x] SEO optimization with meta tags
- [x] Accessibility features (ARIA labels, semantic HTML, skip links)
- [x] Responsive design for all screen sizes
- [x] Performance optimized with lazy loading considerations
- [x] TypeScript for type safety
- [x] Professional footer with contact information
- [x] Form validation and user feedback
- [x] Mobile-friendly navigation

### 📋 Before Deployment
- [ ] Update personal information (name, email, phone, location)
- [ ] Replace placeholder project data with real case studies
- [ ] Add actual portfolio images
- [ ] Configure analytics (Google Analytics, Plausible, etc.)
- [ ] Set up environment variables if needed
- [ ] Add resume/CV download link
- [ ] Configure contact form backend (email service, API)
- [ ] Test on multiple browsers and devices
- [ ] Run accessibility audit (Lighthouse, axe DevTools)
- [ ] Optimize images and assets
- [ ] Set up proper domain and SSL certificate

## Customization Guide

### Update Personal Information

1. **Hero Section** (`/components/Hero.tsx`):
   - Change name from "Sarah Mitchell"
   - Update tagline to match your expertise

2. **About Section** (`/components/About.tsx`):
   - Rewrite bio with your background
   - Update years of experience
   - Replace profile image

3. **Skills Section** (`/components/Skills.tsx`):
   - Modify skill categories based on your expertise
   - Add/remove skills as needed

4. **Projects Section** (`/components/Projects.tsx`):
   - Replace with your actual projects/case studies
   - Add real metrics and outcomes
   - Update project images

5. **Contact Section** (`/components/Contact.tsx`):
   - Update email, phone, and location
   - Configure social media links (LinkedIn, Twitter)
   - Set up contact form backend

6. **SEO** (`/components/SEOHead.tsx`):
   - Update default title and description
   - Customize keywords for better SEO

### Color Scheme

The color scheme is defined in `/styles/globals.css`. To customize:

1. Modify CSS variables in the `:root` selector
2. Update Tailwind classes in components
3. Adjust gradient colors in Hero section

### Contact Form Integration

To make the contact form functional:

1. **Option 1: Email Service (Recommended)**
   ```typescript
   // Use services like EmailJS, SendGrid, or Resend
   import emailjs from '@emailjs/browser';
   
   const handleSubmit = async (e: React.FormEvent) => {
     e.preventDefault();
     await emailjs.send('service_id', 'template_id', formData);
   };
   ```

2. **Option 2: API Endpoint**
   ```typescript
   const handleSubmit = async (e: React.FormEvent) => {
     e.preventDefault();
     await fetch('/api/contact', {
       method: 'POST',
       body: JSON.stringify(formData)
     });
   };
   ```

## Deployment

### Recommended Platforms

1. **Vercel** (Recommended)
   ```bash
   npm install -g vercel
   vercel
   ```

2. **Netlify**
   ```bash
   npm run build
   netlify deploy --prod --dir=dist
   ```

3. **GitHub Pages**
   - Configure build output
   - Set up GitHub Actions for automatic deployment

### Environment Variables

Create a `.env` file for sensitive data:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_ANALYTICS_ID=your_analytics_id
```

### Build Commands

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

## Performance Optimization

### Recommended Improvements
1. **Image Optimization**: Use WebP format and responsive images
2. **Code Splitting**: Implement lazy loading for routes
3. **CDN**: Serve static assets via CDN
4. **Caching**: Configure proper cache headers
5. **Analytics**: Add performance monitoring

### Lighthouse Scores Target
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 95+

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## Accessibility

This portfolio follows WCAG 2.1 Level AA standards:
- Keyboard navigation support
- Screen reader friendly
- Proper heading hierarchy
- Sufficient color contrast
- Focus indicators
- Alternative text for images
- Skip to content link

## License

This project is open source and available for personal use. Feel free to fork and customize for your own portfolio.

## Support

For issues or questions:
1. Check existing documentation
2. Review component code comments
3. Consult Shadcn/ui documentation
4. Open an issue on GitHub

## Credits

- Design inspired by modern portfolio trends
- UI components from [Shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)
- Images from [Unsplash](https://unsplash.com/)

---

Built with ❤️ using React and Tailwind CSS
