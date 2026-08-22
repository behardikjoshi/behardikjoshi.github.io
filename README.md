# Wedding Invitation Portfolio

This is the refactored version of the wedding invitation website built with Angular.

## Project Structure

- **Root Route (`/`)**: Modern Angular portfolio homepage
- **Wedding Invite Route (`/wedding-invite`)**: Original wedding invitation with countdown timer

## Setup Instructions

### Prerequisites
- Node.js (v18 or higher)
- npm (v9 or higher)

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
- Modern responsive design
- Featured projects showcase
- Skills section
- Contact information
- Social media links

### Wedding Invite (`/wedding-invite`)
- Elegant wedding invitation
- Countdown timer to wedding date
- Venue information with Google Maps link
- Invitation card download
- Responsive design for all devices

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

- **Angular 17**: Latest version
- **TypeScript**: Latest
- **CSS3**: Responsive design
- **RxJS**: Reactive programming

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - See LICENSE file for details

## Contact

For inquiries, reach out to: hvj.joshi06@gmail.com
