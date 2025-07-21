# Shishir Kandel - Portfolio Website

A modern, responsive portfolio website for Creative Designer & Visual Strategist Shishir Kandel. Built with React, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, clean design with purple/pink gradient theme
- 📱 Fully responsive design for all devices
- ⚡ Fast loading with optimized images
- 🎭 Smooth animations and hover effects
- 📧 Contact form (ready for integration with services)
- 🖼️ Project showcase with horizontal scrolling
- 🔍 Individual project detail pages
- 🌟 SEO optimized with meta tags

## Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS
- **Routing**: Wouter
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Build Tool**: Vite

## Setup Instructions

### 1. Install Dependencies

```bash
cd shishir
npm install
```

### 2. Add Your Images

Copy your project images to the `public/images/` folder:

- `profile-image.jpg` - Your profile photo
- `about-image.jpg` - About section image
- `project-1.jpg` through `project-6.jpg` - Project images

### 3. Update Portfolio Data

Edit `src/data/portfolio.ts` to customize:

- Personal information and social links
- Project details and descriptions
- About section content
- Contact information

### 4. Test Locally

```bash
npm run dev
```

Visit `http://localhost:5173` to see your portfolio.

### 5. Build for Production

```bash
npm run build
```

The built files will be in the `dist/` folder.

## Deployment Options

### Option 1: Netlify (Recommended)

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/your-username/your-repo-name.git
   git push -u origin main
   ```

2. **Deploy to Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub repository
   - Set build command: `npm run build`
   - Set publish directory: `dist`
   - Click "Deploy site"

3. **Custom Domain** (Optional):
   - In Netlify dashboard, go to Site settings > Domain management
   - Add your custom domain

### Option 2: Vercel

1. **Push to GitHub** (same as above)

2. **Deploy to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect it's a Vite project
   - Click "Deploy"

### Option 3: GitHub Pages

1. **Install gh-pages**:
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add to package.json scripts**:
   ```json
   "homepage": "https://your-username.github.io/your-repo-name",
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```

3. **Deploy**:
   ```bash
   npm run deploy
   ```

## Customization Guide

### Colors and Theme

The color scheme uses CSS custom properties. Main colors:
- Primary: Purple (`#8b5cf6`)
- Secondary: Pink (`#ec4899`)
- Background: White/Light gray

### Adding New Projects

1. Add project images to `public/images/`
2. Update `src/data/portfolio.ts` with new project data
3. Follow the existing structure for consistency

### Contact Form Integration

The contact form is ready for integration with:

- **Netlify Forms**: Add `netlify` attribute to form
- **Formspree**: Update form action to Formspree endpoint
- **EmailJS**: Add EmailJS service integration

### Performance Tips

- Optimize images (use WebP format when possible)
- Keep image sizes reasonable (max 1MB each)
- Use lazy loading for better performance

## Browser Support

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)

## License

This project is for personal/professional use by Shishir Kandel.

---

For questions or support, contact: shishirkandel98@gmail.com# shishir-portfolio1
# shishir-portfolio1
# shishir-portfolio1
