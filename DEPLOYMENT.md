# Deployment Guide: Dyeton Paints on Netlify

This guide will walk you through deploying your Dyeton Paints website to Netlify, including both the frontend and backend functionality.

## Prerequisites

1. **GitHub Account**: Your code should be in a GitHub repository
2. **Netlify Account**: Sign up at [netlify.com](https://netlify.com)
3. **Resend API Key**: You already have this configured

## Step 1: Prepare Your Repository

Make sure your code is pushed to GitHub with the following structure:
```
coatify-web-solutions-main/
├── src/                    # React frontend
├── netlify/
│   └── functions/
│       └── send-email.js   # Email function
├── netlify.toml           # Netlify configuration
├── package.json
└── vite.config.ts
```

## Step 2: Deploy to Netlify

### Option A: Deploy via Netlify UI (Recommended)

1. **Go to Netlify Dashboard**
   - Visit [app.netlify.com](https://app.netlify.com)
   - Sign in with your account

2. **Connect Your Repository**
   - Click "Add new site" → "Import an existing project"
   - Connect to GitHub and select your repository
   - Choose the branch you want to deploy (usually `main` or `master`)

3. **Configure Build Settings**
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - **Base directory**: `coatify-web-solutions-main` (if your repo has nested structure)

4. **Set Environment Variables**
   - Go to Site settings → Environment variables
   - Add: `RESEND_API_KEY` = `re_7Mtajhbe_AtdHr3bTYHbwGAz6ey91Xt9w`

5. **Deploy**
   - Click "Deploy site"
   - Wait for the build to complete

### Option B: Deploy via Netlify CLI

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify**
   ```bash
   netlify login
   ```

3. **Initialize and Deploy**
   ```bash
   cd coatify-web-solutions-main
   netlify init
   netlify deploy --prod
   ```

## Step 3: Configure Custom Domain (Optional)

1. **Add Custom Domain**
   - Go to Site settings → Domain management
   - Click "Add custom domain"
   - Enter your domain (e.g., `dyetonpaints.com`)

2. **Configure DNS**
   - Add CNAME record pointing to your Netlify site
   - Or use Netlify's nameservers

## Step 4: Test Your Deployment

1. **Test the Website**
   - Visit your Netlify URL
   - Navigate through all pages
   - Check that images and assets load correctly

2. **Test Contact Form**
   - Go to the Contact page
   - Fill out and submit the form
   - Check that emails are sent successfully
   - Verify in Netlify Functions logs

## Step 5: Monitor and Maintain

### View Function Logs
- Go to Functions tab in Netlify dashboard
- Click on `send-email` function
- View logs for debugging

### Environment Variables
- Keep your Resend API key secure
- Update environment variables in Netlify dashboard if needed

### Automatic Deployments
- Every push to your main branch will trigger a new deployment
- Preview deployments are created for pull requests

## Troubleshooting

### Common Issues

1. **Build Fails**
   - Check build logs in Netlify dashboard
   - Ensure all dependencies are in `package.json`
   - Verify Node.js version compatibility

2. **Contact Form Not Working**
   - Check Netlify Functions logs
   - Verify Resend API key is set correctly
   - Test function locally with `netlify dev`

3. **Images Not Loading**
   - Ensure images are in the `public/assets/` directory
   - Check file paths in your code

### Local Testing

Test your Netlify Functions locally:
```bash
npm install -g netlify-cli
netlify dev
```

This will start both your frontend and functions locally for testing.

## Security Considerations

1. **API Keys**: Never commit API keys to your repository
2. **Environment Variables**: Use Netlify's environment variable system
3. **CORS**: Functions are configured to handle CORS properly

## Performance Optimization

1. **Image Optimization**: Consider using Netlify's image optimization
2. **Caching**: Static assets are automatically cached
3. **CDN**: Netlify provides global CDN for fast loading

## Support

If you encounter issues:
1. Check Netlify's documentation
2. Review build logs in the dashboard
3. Test functions locally with `netlify dev`

Your Dyeton Paints website should now be live and fully functional on Netlify! 🎉 