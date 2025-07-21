# Complete Deployment Guide - Shishir Portfolio

This guide will walk you through deploying your frontend-only portfolio from your local laptop to production.

## Prerequisites

- Node.js installed (v16 or later)
- Git installed
- GitHub account
- Netlify or Vercel account (free)

## Step 1: Local Setup & Testing

### 1.1 Navigate to Your Project
```bash
cd shishir
```

### 1.2 Install Dependencies
```bash
npm install
```

### 1.3 Add Your Images
1. Copy your images to `public/images/` folder:
   - `profile-image.jpg`
   - `about-image.jpg`
   - `project-1.jpg` through `project-6.jpg`

2. Verify images are properly placed:
   ```bash
   ls public/images/
   ```

### 1.4 Test Locally
```bash
npm run dev
```
- Open `http://localhost:5173` in your browser
- Check that all images load properly
- Test navigation and responsiveness
- Verify contact form works (displays confirmation)

### 1.5 Build for Production
```bash
npm run build
```
- This creates a `dist/` folder with optimized files
- Test the build locally:
  ```bash
  npm run preview
  ```

## Step 2: GitHub Setup

### 2.1 Create GitHub Repository
1. Go to [github.com](https://github.com)
2. Click "New repository"
3. Name it: `shishir-portfolio` (or your preferred name)
4. Make it public
5. Don't initialize with README (we already have files)
6. Click "Create repository"

### 2.2 Initialize Git and Push
```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Make initial commit
git commit -m "Initial portfolio commit"

# Add GitHub remote (replace YOUR-USERNAME with your GitHub username)
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/shishir-portfolio.git

# Push to GitHub
git push -u origin main
```

## Step 3: Deploy to Netlify (Recommended)

### 3.1 Sign Up for Netlify
1. Go to [netlify.com](https://netlify.com)
2. Sign up using your GitHub account (easiest)

### 3.2 Deploy Your Site
1. Click "New site from Git"
2. Choose "GitHub"
3. Select your `shishir-portfolio` repository
4. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
5. Click "Deploy site"

### 3.3 Wait for Deployment
- Netlify will build and deploy your site
- You'll get a random URL like `https://amazing-portfolio-123456.netlify.app`
- Your site is now live!

### 3.4 Custom Domain (Optional)
1. Go to Site settings > Domain management
2. Click "Add custom domain"
3. Enter your domain (e.g., `shishirkandel.com`)
4. Follow Netlify's DNS instructions

### 3.5 Set Up Continuous Deployment
- Any push to your GitHub `main` branch will automatically deploy
- Make changes locally, push to GitHub, and see them live instantly!

## Step 4: Alternative - Deploy to Vercel

### 4.1 Sign Up for Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign up using your GitHub account

### 4.2 Deploy
1. Click "New Project"
2. Import your GitHub repository
3. Vercel auto-detects Vite settings
4. Click "Deploy"
5. Your site will be live at a Vercel URL

## Step 5: Testing Your Live Site

### 5.1 Check Everything Works
- Visit your live URL
- Test on mobile devices
- Check all images load
- Test contact form
- Verify social media links
- Check project detail pages

### 5.2 SEO Verification
- Check meta tags in browser dev tools
- Test sharing on social media
- Verify favicon appears

## Step 6: Making Updates

### 6.1 Local Changes
```bash
# Make your changes
# Test locally
npm run dev

# Build and test production build
npm run build
npm run preview
```

### 6.2 Deploy Changes
```bash
# Add changes
git add .

# Commit changes
git commit -m "Update portfolio content"

# Push to GitHub
git push

# Netlify/Vercel will automatically deploy the changes
```

## Troubleshooting

### Images Not Loading
- Check file names match exactly (case-sensitive)
- Verify images are in `public/images/` folder
- Check image file formats (jpg, png, gif, webp supported)

### Build Errors
- Check for TypeScript errors: `npm run build`
- Verify all imports are correct
- Check for missing dependencies

### Deployment Issues
- Check build logs in Netlify/Vercel dashboard
- Verify GitHub repository has all files
- Check build command and publish directory settings

## Performance Optimization

### Before Deploying
1. **Optimize Images**:
   - Resize images appropriately (profile: 400x400px, projects: 800x600px)
   - Compress images using tools like TinyPNG
   - Consider WebP format for better compression

2. **Test Performance**:
   - Use browser dev tools to check loading times
   - Test on slow connections
   - Check mobile performance

## Contact Form Integration (Optional)

### Netlify Forms
Add `netlify` attribute to your form in `Contact.tsx`:
```jsx
<form netlify onSubmit={handleSubmit} className="space-y-6">
```

### Formspree Integration
1. Sign up at [formspree.io](https://formspree.io)
2. Create a form and get the endpoint
3. Update form action in `Contact.tsx`

## Security Best Practices

- Never commit API keys or secrets to GitHub
- Use environment variables for sensitive data
- Keep dependencies updated: `npm audit fix`

## Monitoring and Analytics

### Google Analytics (Optional)
1. Create Google Analytics account
2. Add tracking code to `index.html`
3. Monitor visitor traffic and behavior

### Netlify Analytics
- Built-in analytics available in Netlify dashboard
- Shows page views, top pages, referrers

## Success Checklist

- [ ] Images load properly on live site
- [ ] All navigation works smoothly
- [ ] Contact form shows success message
- [ ] Site is responsive on mobile
- [ ] Social media links work
- [ ] Project detail pages load correctly
- [ ] Site loads quickly (< 3 seconds)
- [ ] Custom domain configured (if applicable)
- [ ] SEO meta tags are present

Your portfolio is now live and professional! 🎉

---

**Need Help?**
- Check deployment logs in Netlify/Vercel dashboard
- Review browser console for errors
- Contact: shishirkandel98@gmail.com