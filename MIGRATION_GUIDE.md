# Angular Portfolio - Setup Branch

This branch contains the complete Angular migration setup for transforming the repository from a pure HTML/CSS wedding invite website to a modern Angular-based portfolio.

## Changes Summary

### ✅ Completed

1. **Angular Project Initialization**
   - Angular 17 latest setup
   - TypeScript configuration
   - Build and development scripts configured

2. **Component Structure**
   - `PortfolioComponent`: Modern portfolio homepage at root `/`
   - `WeddingInviteComponent`: Original wedding invite at `/wedding-invite`
   - Standalone components (Angular 17 best practice)

3. **Configuration Files**
   - `angular.json`: Build configuration for GitHub Pages
   - `tsconfig.json`: TypeScript strict mode enabled
   - `package.json`: All dependencies and scripts
   - `karma.conf.js`: Testing configuration

4. **Styling**
   - Global styles in `src/styles.css`
   - Component-scoped styles
   - Responsive design for all breakpoints
   - Wedding invite styling preserved

5. **Routing**
   - Root route (`/`): Portfolio component
   - Wedding route (`/wedding-invite`): Wedding invite component
   - Wildcard redirect to home

## Next Steps

### 1. Move Wedding Assets

```bash
# From repository root, execute these commands to move existing assets
mkdir -p src/assets/wedding/img
mkdir -p src/assets/wedding/mp3
mkdir -p src/assets/wedding/invitation

# Move CSS files
mv css/* src/assets/wedding/ || true

# Move JS files  
mv js/* src/assets/wedding/ || true

# Move MP3 files
mv assets/mp3/* src/assets/wedding/mp3/ || true

# Move invitation PDF
mv invitation/* src/assets/wedding/invitation/ || true

# Copy images
cp assets/img/* src/assets/wedding/img/ || true
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Verify Local Development

```bash
# Start dev server
npm start

# Navigate to http://localhost:4200/
# Test portfolio: http://localhost:4200/
# Test wedding invite: http://localhost:4200/wedding-invite
```

### 4. Build for Production

```bash
npm run build
```

### 5. Deploy to GitHub Pages

```bash
npm run gh-pages-deploy
```

## File Structure After Migration

```
behardikjoshi.github.io/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── portfolio/
│   │   │   │   ├── portfolio.component.ts
│   │   │   │   ├── portfolio.component.html
│   │   │   │   └── portfolio.component.css
│   │   │   └── wedding-invite/
│   │   │       ├── wedding-invite.component.ts
│   │   │       ├── wedding-invite.component.html
│   │   │       └── wedding-invite.component.css
│   │   ├── app.component.ts
│   │   ├── app.config.ts
│   │   └── app.routes.ts
│   ├── assets/
│   │   └── wedding/
│   │       ├── img/
│   │       ├── mp3/
│   │       └── invitation/
│   ├── index.html
│   ├── main.ts
│   └── styles.css
├── angular.json
├── tsconfig.json
├── package.json
└── README.md
```

## Key URLs After Deployment

- **Portfolio Home**: https://behardikjoshi.github.io/
- **Wedding Invite**: https://behardikjoshi.github.io/wedding-invite

## Technologies Used

- **Angular**: 17.0.0 (Latest)
- **TypeScript**: 5.2.2
- **RxJS**: 7.8.0
- **CSS3**: Responsive design with flexbox/grid
- **GitHub Pages**: Deployment target

## Customization

### Update Portfolio Content

Edit `src/app/components/portfolio/portfolio.component.ts`:
- Add your projects to the `projects` array
- Update skills in the `skills` array
- Modify contact information

### Customize Wedding Invite

Edit `src/app/components/wedding-invite/wedding-invite.component.html`:
- Update wedding date in the countdown
- Modify venue information
- Update contact details

## Testing

```bash
# Run unit tests
npm run test

# Run tests with coverage
ng test --code-coverage
```

## Troubleshooting

### Audio Autoplay Not Working
Browser autoplay policies restrict autoplay. Implement user interaction to enable audio.

### Sakura Animation Not Showing
Ensure jQuery and the Sakura plugin are properly loaded. Add fallback in component.

### CSS Not Loading in Production
Verify `baseHref` in `angular.json` is set to `/`

## Support

For issues or questions, contact: hvj.joshi06@gmail.com
