# Wedding Invitation Portfolio - Angular 22

This is the refactored version of the wedding invitation website built with **Angular 22** (latest version).

## Project Structure

- **Root Route (`/`)**: Modern Angular portfolio homepage
- **Wedding Invite Route (`/wedding-invite`)**: Original wedding invitation with countdown timer

## Setup Instructions

### Prerequisites
- Node.js (v20 or higher)
- npm (v10 or higher)
- Angular CLI 22

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm start

# Navigate to http://localhost:4200/
```

### Production Build

```bash
# Build for production
npm run build
```

### Deploy to GitHub Pages

```bash
# Deploy to GitHub Pages
npm run gh-pages-deploy
```

## Features

### Portfolio Home (`/`)
- Modern responsive design with Angular 22
- Featured projects showcase
- Skills section
- Contact information
- Social media links
- Signal-based reactivity (Angular 22 features)

### Wedding Invite (`/wedding-invite`)
- Elegant wedding invitation
- Countdown timer to wedding date
- Venue information with Google Maps link
- Invitation card download
- Responsive design for all devices
- YouTube video embedding

## File Structure

```
src/
├── app/
│   ├── components/
│   │   ├── portfolio/
│   │   │   ├── portfolio.component.ts
│   │   │   ├── portfolio.component.html
│   │   │   └── portfolio.component.css
│   │   └── wedding-invite/
│   │       ├── wedding-invite.component.ts
│   │       ├── wedding-invite.component.html
│   │       └── wedding-invite.component.css
│   ├── app.component.ts
│   ├── app.component.css
│   ├── app.config.ts
│   ├── app.routes.ts
│   └── app.component.spec.ts
├── assets/
│   └── wedding/
│       ├── img/
│       ├── mp3/
│       └── invitation/
├── index.html
├── main.ts
├── polyfills.ts
├── styles.css
└── test.ts
```

## Migrating Assets

Move the existing wedding assets to the new structure:

```bash
# Move wedding images
mv css/ src/assets/wedding/
mv js/ src/assets/wedding/
mv assets/mp3/ src/assets/wedding/mp3/
mv invitation/ src/assets/wedding/invitation/
```

## Technology Stack

- **Angular**: 22.0.0 (Latest)
- **TypeScript**: 5.5.2
- **CSS3**: Responsive design
- **RxJS**: 7.8.0 - Reactive programming
- **Standalone Components**: Angular 22 best practice
- **Signals**: Angular 22 reactive primitives (optional enhancement)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## What's New in Angular 22

✨ **Key Features Used:**
- Standalone components (no NgModule)
- Modern TypeScript 5.5 support
- Enhanced bundler configuration
- Improved performance optimizations
- Signal-based reactivity ready
- Enhanced developer experience

## License

MIT License - See LICENSE file for details

## Contact

For inquiries, reach out to: hvj.joshi06@gmail.com
