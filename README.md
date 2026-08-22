# Hardik Joshi - Portfolio & Wedding Invitation

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Angular](https://img.shields.io/badge/Angular-22-dd0031?logo=angular&logoColor=white)](https://angular.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-3178c6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-20%2B-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![GitHub Pages](https://img.shields.io/badge/Deployed-GitHub%20Pages-blue?logo=github)](https://behardikjoshi.github.io/)

## 📋 Table of Contents

- [Project Overview](#-project-overview)
- [Architecture](#-architecture)
- [Features](#-features)
- [Technology Stack](#-technology-stack)
- [Project Structure](#-project-structure)
- [Setup & Installation](#-setup--installation)
- [Development Guide](#-development-guide)
- [Build & Deployment](#-build--deployment)
- [Configuration](#-configuration)
- [Components](#-components)
- [Routing](#-routing)
- [Asset Management](#-asset-management)
- [Testing](#-testing)
- [Performance](#-performance)
- [Browser Support](#-browser-support)
- [Troubleshooting](#-troubleshooting)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

---

## 🎯 Project Overview

A modern, full-featured Angular 22 application that serves as a personal portfolio website while also hosting an elegant wedding invitation at a dedicated route. The project demonstrates best practices in Angular development, responsive design, and GitHub Pages deployment.

### Key Features
- **Modern Portfolio**: Showcase projects, skills, and professional information
- **Wedding Invite**: Elegant invitation page with countdown timer
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **GitHub Pages Hosting**: Automatically deployed via GitHub Actions
- **Standalone Components**: Angular 22 best practice implementation
- **TypeScript Strict Mode**: Full type safety throughout the application

---

## 🏗️ Architecture

### High-Level Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                     GitHub Pages (CDN)                          │
│            https://behardikjoshi.github.io/                     │
└────────────┬────────────────────────────────────────────────────┘
             │
             │ (GitHub Actions - Auto Deploy)
             ↓
┌─────────────────────────────────────────────────────────────────┐
│                    Angular 22 Application                        │
│                    (Standalone Components)                       │
├─────────────────────────────────────────────────────────────────┤
│  Routing Layer                                                  │
│  ├── / → PortfolioComponent                                    │
│  └── /wedding-invite → WeddingInviteComponent                 │
├─────────────────────────────────────────────────────────────────┤
│  Feature Modules                                                │
│  ├── Portfolio Module                                           │
│  │   ├── Hero Section                                          │
│  │   ├── Projects Showcase                                     │
│  │   ├── Skills Section                                        │
│  │   ├── Contact Section                                       │
│  │   └── Footer                                                │
│  │                                                              │
│  └── Wedding Invite Module                                     │
│      ├── Countdown Timer                                       │
│      ├── Venue Information                                     │
│      ├── Invitation Details                                    │
│      ├── Media Section                                         │
│      └── Action Buttons                                        │
├─────────────────────────────────────────────────────────────────┤
│  Shared Resources                                               │
│  ├── Global Styles                                             │
│  ├── Fonts (Google Fonts)                                      │
│  ├── Assets (Images, Audio, PDFs)                              │
│  └── Configuration                                             │
├─────────────────────────────────────────────────────────────────┤
│  Build & Optimization                                           │
│  ├── Angular CLI Build                                         │
│  ├── Code Splitting                                            │
│  ├── Tree Shaking                                              │
│  ├── Minification                                              │
│  └── Source Maps (dev)                                         │
└─────────────────────────────────────────────────────────────────┘
```

### Component Architecture

```
AppComponent (Root)
├── RouterOutlet
│   ├── PortfolioComponent (/)
│   │   ├── HeroSection
│   │   ├── ProjectsGrid
│   │   │   └── ProjectCard (×N)
│   │   ├── SkillsSection
│   │   │   └── SkillCategory (×N)
│   │   ├── ContactSection
│   │   └── Footer
│   │
│   └── WeddingInviteComponent (/wedding-invite)
│       ├── Countdown Timer
│       ├── Wedding Details
│       ├── Venue Info
│       ├── Action Buttons
│       ├── YouTube Video
│       ├── Audio Player
│       └── Decorations
│
└── Global Styles
```

---

## ✨ Features

### Portfolio Features
- ✅ Modern hero section with gradient background
- ✅ Showcase featured projects with descriptions and technologies
- ✅ Categorized skills display (Frontend, Backend, Tools)
- ✅ Contact section with email and social links
- ✅ Fully responsive design (desktop, tablet, mobile)
- ✅ Smooth animations and hover effects
- ✅ Clean, maintainable component structure

### Wedding Invite Features
- ✅ Elegant wedding invitation design
- ✅ Real-time countdown timer to wedding date
- ✅ Venue information with Google Maps link
- ✅ PDF invitation card download
- ✅ Embedded YouTube video
- ✅ Background music player
- ✅ Sakura falling animation (with jQuery)
- ✅ Responsive layout for all devices
- ✅ Contact information display

### Platform Features
- ✅ Client-side routing (no page reloads)
- ✅ Single Page Application (SPA)
- ✅ Automatic GitHub Pages deployment
- ✅ CI/CD pipeline with GitHub Actions
- ✅ TypeScript strict mode
- ✅ Comprehensive error handling
- ✅ SEO-friendly meta tags
- ✅ Accessibility considerations

---

## 🛠️ Technology Stack

### Frontend Framework
- **Angular 22.0.0** - Latest version
  - Standalone components
  - Signal-based reactivity ready
  - Advanced routing
  - Dependency injection

### Language & Compiler
- **TypeScript 5.5.2** - Modern language features
  - Strict mode enabled
  - Full type safety
  - Latest ES2022 features

### Libraries & Tools
- **RxJS 7.8.0** - Reactive programming
- **Angular CLI 22** - Development and build tool
- **Karma & Jasmine** - Testing framework
- **SCSS/CSS3** - Styling
- **Node.js 20+** - Runtime environment
- **npm 10+** - Package manager

### Deployment
- **GitHub Pages** - Free hosting
- **GitHub Actions** - CI/CD automation
- **angular-cli-ghpages** - Deployment tool

### External Services
- **Google Fonts** - Arvo, Dancing Script
- **Google Maps** - Venue location
- **YouTube** - Video embedding
- **CloudFlare CDN** - Font Awesome icons

---

## 📂 Project Structure

```
behardikjoshi.github.io/
│
├── .github/
│   └── workflows/
│       └── deploy.yml              # GitHub Actions deployment pipeline
│
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── portfolio/
│   │   │   │   ├── portfolio.component.ts       # Component logic
│   │   │   │   ├── portfolio.component.html     # Template
│   │   │   │   └── portfolio.component.css      # Styles
│   │   │   │
│   │   │   └── wedding-invite/
│   │   │       ├── wedding-invite.component.ts  # Countdown timer logic
│   │   │       ├── wedding-invite.component.html# Template
│   │   │       └── wedding-invite.component.css # Styles
│   │   │
│   │   ├── app.component.ts         # Root component (RouterOutlet)
│   │   ├── app.component.css        # Root styles
│   │   ├── app.component.spec.ts    # Root component tests
│   │   ├── app.config.ts            # Angular configuration
│   │   ├── app.routes.ts            # Route definitions
│   │   └── app.component.spec.ts    # Component tests
│   │
│   ├── assets/
│   │   └── wedding/
│   │       ├── img/                 # Wedding images & decorations
│   │       ├── mp3/                 # Background music files
│   │       └── invitation/          # PDF invitation card
│   │
│   ├── index.html                   # Main HTML file
│   ├── main.ts                      # Application bootstrap
│   ├── polyfills.ts                 # Browser polyfills
│   ├── styles.css                   # Global styles
│   ├── test.ts                      # Test configuration
│   └── favicon.png                  # Website icon
│
├── Configuration Files
│   ├── angular.json                 # Angular CLI configuration
│   ├── tsconfig.json                # TypeScript configuration
│   ├── tsconfig.app.json            # App-specific TS config
│   ├── tsconfig.spec.json           # Test TS config
│   ├── karma.conf.js                # Test runner config
│   ├── package.json                 # Dependencies & scripts
│   ├── package-lock.json            # Dependency lock file
│   └── .nojekyll                    # GitHub Pages config
│
├── Code Style & Config
│   ├── .editorconfig                # Editor settings
│   ├── .gitignore                   # Git ignore rules
│   └── .angular/config.json         # Schematics config
│
├── Documentation
│   ├── README.md                    # This file
│   ├── MIGRATION_GUIDE.md           # Migration details
│   ├── QUICK_START.md               # 5-minute setup
│   ├── IMPLEMENTATION_CHECKLIST.md  # Step-by-step guide
│   └── BRANCH_SUMMARY.md            # Branch overview
│
└── Build Output (generated)
    └── dist/
        └── behardikjoshi-portfolio/ # Production build
```

---

## 🚀 Setup & Installation

### Prerequisites

```bash
# Check Node.js version (should be v20 or higher)
node --version    # v20.x or higher

# Check npm version (should be v10 or higher)
npm --version     # v10.x or higher
```

### Installation Steps

**Step 1: Clone or checkout the repository**

```bash
git clone https://github.com/behardikjoshi/behardikjoshi.github.io.git
cd behardikjoshi.github.io

# Or if already cloned
git fetch origin
git checkout setup/angular-portfolio-migration
```

**Step 2: Move existing wedding assets** (if upgrading from old version)

```bash
# Create directory structure
mkdir -p src/assets/wedding/{img,mp3,invitation}

# Move CSS files
if [ -d "css" ]; then mv css/* src/assets/wedding/ 2>/dev/null || true; fi

# Move JS files
if [ -d "js" ]; then mv js/* src/assets/wedding/ 2>/dev/null || true; fi

# Move MP3 files
if [ -d "assets/mp3" ]; then mv assets/mp3/* src/assets/wedding/mp3/ 2>/dev/null || true; fi

# Move invitation files
if [ -d "invitation" ]; then mv invitation/* src/assets/wedding/invitation/ 2>/dev/null || true; fi

# Copy images
if [ -d "assets/img" ]; then cp -r assets/img/* src/assets/wedding/img/ 2>/dev/null || true; fi
```

**Step 3: Install dependencies**

```bash
npm install
```

This installs:
- Angular 22 framework and tools
- TypeScript 5.5 compiler
- Testing frameworks (Karma, Jasmine)
- Build tools and development dependencies

---

## 💻 Development Guide

### Start Development Server

```bash
npm start
```

**Output:**
```
✔ Compiled successfully.
✔ Generated index.html.

Application bundle generation complete. [4.012 seconds]

Initial Chunk Files   | Names         | Raw Size
────────────────────────────────────────────────────
main-XXXXX.js         | main          | 150.23 kB
polyfills-XXXXX.js    | polyfills     | 33.45 kB
styles-XXXXX.css      | styles        | 8.67 kB

                      | Initial Total | 192.35 kB

✔ Build at: 2024-08-22T08:00:00.000Z - Hash: abc123def456

Application is served at 'http://localhost:4200/'
```

### Access Application

- **Portfolio Home**: http://localhost:4200/
- **Wedding Invite**: http://localhost:4200/wedding-invite
- **Webpack Dashboard**: http://localhost:4200/ (HMR enabled)

### Hot Module Replacement (HMR)

Changes are automatically reloaded in the browser without page refresh:

```bash
# Edit a component file
vim src/app/components/portfolio/portfolio.component.ts

# Save (Ctrl+S) → Browser updates automatically ✨
```

### Generate New Component

```bash
# Generate a new standalone component
ng generate component components/my-new-component

# This creates:
# - my-new-component.component.ts
# - my-new-component.component.html
# - my-new-component.component.css
# - my-new-component.component.spec.ts
```

### Project Structure Navigation

```
Edit the portfolio content:
  → src/app/components/portfolio/portfolio.component.ts
  → src/app/components/portfolio/portfolio.component.html
  → src/app/components/portfolio/portfolio.component.css

Edit the wedding invite:
  → src/app/components/wedding-invite/wedding-invite.component.ts
  → src/app/components/wedding-invite/wedding-invite.component.html
  → src/app/components/wedding-invite/wedding-invite.component.css

Global styles:
  → src/styles.css

Assets:
  → src/assets/wedding/
```

---

## 🏗️ Build & Deployment

### Production Build

```bash
npm run build
```

**Build Output:**

```
✔ Compiled successfully.

Generated successfully.

Output location: dist/behardikjoshi-portfolio
Build target(s) in this production bundle: behardikjoshi-portfolio

Built with Angular CLI v22.0.0
```

**Build Artifacts:**

```
dist/behardikjoshi-portfolio/
├── index.html          # Main HTML file (optimized)
├── main-HASH.js        # Main application bundle
├── polyfills-HASH.js   # Browser polyfills
├── styles-HASH.css     # Global styles (minified)
├── favicon.png         # Favicon
└── assets/             # Static assets
    └── wedding/        # Wedding assets
```

### Deploy to GitHub Pages

#### Option 1: Automatic Deployment (Recommended)

```bash
# Just push to main branch
git add .
git commit -m "Update portfolio content"
git push origin main

# GitHub Actions automatically:
# 1. Runs npm install
# 2. Runs npm run build
# 3. Deploys to GitHub Pages
# 4. Site updates at https://behardikjoshi.github.io/
```

#### Option 2: Manual Deployment

```bash
# Build and deploy manually
npm run gh-pages-deploy

# This command:
# 1. Builds the project
# 2. Commits to gh-pages branch
# 3. Pushes to GitHub
# 4. Site updates automatically
```

### Deployment Pipeline (GitHub Actions)

**Workflow File:** `.github/workflows/deploy.yml`

```yaml
Trigger: Push to main branch
  ↓
Install Node.js 20.x
  ↓
Run: npm install
  ↓
Run: npm run build
  ↓
Deploy to gh-pages branch
  ↓
GitHub Pages serves the site
  ↓
Live at: https://behardikjoshi.github.io/
```

### Verify Deployment

```bash
# Check GitHub Pages deployment
https://github.com/behardikjoshi/behardikjoshi.github.io/deployments

# Check deployment status
https://github.com/behardikjoshi/behardikjoshi.github.io/actions

# Verify site is live
https://behardikjoshi.github.io/
https://behardikjoshi.github.io/wedding-invite
```

---

## ⚙️ Configuration

### Angular Configuration (`angular.json`)

```json
{
  "projects": {
    "behardikjoshi-portfolio": {
      "architect": {
        "build": {
          "options": {
            "outputPath": "dist/behardikjoshi-portfolio",
            "index": "src/index.html",
            "main": "src/main.ts",
            "baseHref": "/",
            "assets": ["src/favicon.png", "src/assets"]
          }
        }
      }
    }
  }
}
```

### TypeScript Configuration (`tsconfig.json`)

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ES2022",
    "moduleResolution": "bundler",
    "strict": true,
    "noImplicitOverride": true,
    "noImplicitReturns": true
  },
  "angularCompilerOptions": {
    "strictTemplates": true,
    "strictInjectionParameterTypes": true
  }
}
```

### Application Configuration (`src/app/app.config.ts`)

```typescript
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    // Add more providers as needed
  ]
};
```

### Environment Configuration

To add environment-specific variables:

```typescript
// src/environments/environment.ts
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000'
};

// src/environments/environment.prod.ts
export const environment = {
  production: true,
  apiUrl: 'https://api.example.com'
};
```

---

## 🧩 Components

### AppComponent (Root)

**File:** `src/app/app.component.ts`

```typescript
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {
  title = 'Hardik Joshi Portfolio';
}
```

**Purpose:** Root component that hosts the router outlet for client-side routing.

---

### PortfolioComponent

**File:** `src/app/components/portfolio/portfolio.component.ts`

**Features:**
- Hero section with name and title
- Projects showcase grid
- Skills categorization
- Contact section
- Social media links

**Data Structure:**

```typescript
interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  image?: string;
}

interface Skill {
  category: string;
  items: string[];
}
```

**Adding Projects:**

```typescript
projects: Project[] = [
  {
    id: 1,
    title: 'My Awesome Project',
    description: 'Project description here',
    technologies: ['Angular', 'TypeScript'],
    link: 'https://github.com/...',
    image: 'assets/project-image.png'
  }
];
```

---

### WeddingInviteComponent

**File:** `src/app/components/wedding-invite/wedding-invite.component.ts`

**Features:**
- Real-time countdown timer
- Dynamic time calculation
- Sakura animation support
- Audio player initialization
- Responsive design

**Update Wedding Date:**

```typescript
weddingDate = new Date('2024-04-21T11:00:00').getTime();
```

**Methods:**
- `startCountdown()` - Updates countdown every second
- `initializeSakura()` - Initializes falling flower animation
- `initializeAudio()` - Starts background music

---

## 🛣️ Routing

**File:** `src/app/app.routes.ts`

```typescript
export const routes: Routes = [
  { 
    path: '', 
    component: PortfolioComponent 
  },
  { 
    path: 'wedding-invite', 
    component: WeddingInviteComponent 
  },
  { 
    path: '**', 
    redirectTo: '' 
  }
];
```

**Route Map:**

| Route | Component | Purpose |
|-------|-----------|----------|
| `/` | PortfolioComponent | Portfolio homepage |
| `/wedding-invite` | WeddingInviteComponent | Wedding invitation |
| `**` (any other) | Redirect to `/` | Catch-all redirect |

**Navigation:**

```html
<!-- Template navigation -->
<a routerLink="/">Portfolio</a>
<a routerLink="/wedding-invite">Wedding</a>

<!-- Programmatic navigation -->
this.router.navigate(['/wedding-invite']);
```

---

## 📦 Asset Management

### Asset Directory Structure

```
src/assets/
└── wedding/
    ├── img/
    │   ├── image-top-right.png
    │   ├── image-top-left.png
    │   ├── couple-photo.jpg
    │   └── venue-photo.jpg
    │
    ├── mp3/
    │   └── song.mp3              # Background music
    │
    └── invitation/
        └── Hardik & Priyanka.pdf  # PDF invitation card
```

### Adding New Assets

```bash
# Add images to src/assets/wedding/img/
cp my-image.jpg src/assets/wedding/img/

# Add audio to src/assets/wedding/mp3/
cp my-song.mp3 src/assets/wedding/mp3/

# Add documents to src/assets/wedding/invitation/
cp my-card.pdf src/assets/wedding/invitation/
```

### Referencing Assets in Templates

```html
<!-- Images -->
<img src="assets/wedding/img/couple-photo.jpg" alt="Couple">

<!-- Audio -->
<audio src="assets/wedding/mp3/song.mp3" controls></audio>

<!-- PDF Download -->
<a href="assets/wedding/invitation/Hardik & Priyanka.pdf" download>
  Download Card
</a>
```

---

## 🧪 Testing

### Run Unit Tests

```bash
npm run test
```

**Karma Test Runner starts**
- Watches for file changes
- Re-runs tests on changes
- Opens browser for real-time feedback

### Run Tests Once (CI Mode)

```bash
ng test --watch=false
```

### Generate Coverage Report

```bash
ng test --code-coverage
```

**Coverage output:**
```
coverage/behardikjoshi-portfolio/
├── index.html       # Coverage report
├── base.css
└── ...
```

Open `coverage/behardikjoshi-portfolio/index.html` in browser.

### Test Examples

**Component Test Template:**

```typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PortfolioComponent } from './portfolio.component';

describe('PortfolioComponent', () => {
  let component: PortfolioComponent;
  let fixture: ComponentFixture<PortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(PortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have projects', () => {
    expect(component.projects.length).toBeGreaterThan(0);
  });
});
```

---

## ⚡ Performance

### Build Optimization

- **Code Splitting**: Lazy loading for future modules
- **Tree Shaking**: Removes unused code
- **Minification**: Compresses JavaScript and CSS
- **Source Maps**: Available in development only
- **Bundling**: Efficient module bundling

### Performance Metrics

**Expected Production Bundle:**

```
main-HASH.js          ~150 KB (gzipped: ~40 KB)
polyfills-HASH.js     ~33 KB  (gzipped: ~10 KB)
styles-HASH.css       ~9 KB   (gzipped: ~2 KB)
─────────────────────────────────────────
Total                 ~192 KB (gzipped: ~52 KB)
```

### Optimization Tips

1. **Lazy Load Images**: Use native lazy loading
   ```html
   <img src="..." loading="lazy">
   ```

2. **Use OnPush Change Detection**:
   ```typescript
   @Component({
     changeDetection: ChangeDetectionStrategy.OnPush
   })
   ```

3. **Optimize Assets**: Compress images and audio files

4. **Remove Unused Dependencies**: Regularly audit npm packages
   ```bash
   npm audit
   npm outdated
   ```

---

## 🌐 Browser Support

| Browser | Minimum Version | Status |
|---------|-----------------|--------|
| Chrome | Latest (v120+) | ✅ Fully Supported |
| Firefox | Latest (v121+) | ✅ Fully Supported |
| Safari | Latest (v17+) | ✅ Fully Supported |
| Edge | Latest (v120+) | ✅ Fully Supported |
| IE 11 | - | ❌ Not Supported |

### Feature Support

- ES2022 JavaScript features
- CSS Grid and Flexbox
- CSS Variables
- LocalStorage API
- Fetch API
- Promise/Async-Await

---

## 🐛 Troubleshooting

### Common Issues & Solutions

#### 1. **Port 4200 Already in Use**

```bash
# Find process using port 4200
lsof -i :4200

# Kill the process
kill -9 <PID>

# Or use a different port
ng serve --port 4201
```

#### 2. **Dependencies Not Installing**

```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

#### 3. **Build Fails with TypeScript Errors**

```bash
# Check TypeScript version
ngc --version

# Rebuild TypeScript cache
rm -rf .angular/cache

# Rebuild
ng build
```

#### 4. **Hot Module Replacement (HMR) Not Working**

```bash
# Restart development server
ng serve --poll=2000

# Or disable HMR
ng serve --hmr=false
```

#### 5. **Audio Autoplay Blocked**

Browsers require user interaction for autoplay:

```typescript
// Add user interaction button
playAudio() {
  const audio = document.getElementById('my_audio') as HTMLAudioElement;
  audio.play().catch(err => console.log('Autoplay blocked:', err));
}
```

#### 6. **Sakura Animation Not Showing**

Ensure jQuery and Sakura plugin are loaded:

```html
<!-- In index.html, before app-root -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script src="https://cdn.jsdelivr.net/gh/timoschaefer/jQuery-Sakura/jquery-sakura.min.js"></script>
```

#### 7. **GitHub Pages Shows 404**

```bash
# Verify baseHref in angular.json
"baseHref": "/"

# Check _nojekyll file exists
ls -la dist/behardikjoshi-portfolio/_nojekyll

# Rebuild and redeploy
npm run build
npm run gh-pages-deploy
```

#### 8. **Deployment Takes Too Long**

```bash
# Check GitHub Actions logs
https://github.com/behardikjoshi/behardikjoshi.github.io/actions

# Typical build time: 2-5 minutes
# If longer, check for network issues or large assets
```

---

## 🤝 Contributing

### Fork & Clone

```bash
# Fork the repository on GitHub
# Clone your fork
git clone https://github.com/YOUR-USERNAME/behardikjoshi.github.io.git
cd behardikjoshi.github.io

# Add upstream remote
git remote add upstream https://github.com/behardikjoshi/behardikjoshi.github.io.git
```

### Create Feature Branch

```bash
# Create and checkout new branch
git checkout -b feature/my-new-feature

# Make your changes
# Commit
git add .
git commit -m "feat: add amazing feature"

# Push to your fork
git push origin feature/my-new-feature
```

### Create Pull Request

1. Go to GitHub repository
2. Click "Compare & pull request"
3. Fill in PR details
4. Submit PR

### Code Standards

- Follow Angular style guide
- Use TypeScript strict mode
- Add tests for new features
- Update documentation
- Use descriptive commit messages

---

## 📄 License

MIT License - See LICENSE file for details

```
MIT License

Copyright (c) 2024 Hardik Joshi

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software...
```

---

## 📞 Contact

- **Email**: hvj.joshi06@gmail.com
- **GitHub**: [@behardikjoshi](https://github.com/behardikjoshi)
- **Portfolio**: [https://behardikjoshi.github.io/](https://behardikjoshi.github.io/)
- **Wedding Invite**: [https://behardikjoshi.github.io/wedding-invite](https://behardikjoshi.github.io/wedding-invite)

---

## 🙏 Acknowledgments

- **Angular Team** - For the amazing framework
- **GitHub Pages** - For free hosting
- **Community** - For amazing libraries and tools

---

## 📚 Additional Resources

### Documentation
- [Angular Documentation](https://angular.io/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [GitHub Pages Docs](https://pages.github.com/)
- [GitHub Actions Docs](https://docs.github.com/en/actions)

### Tutorials
- [Angular Tutorial](https://angular.io/tutorial)
- [Angular Style Guide](https://angular.io/guide/styleguide)
- [GitHub Actions Tutorial](https://docs.github.com/en/actions/quickstart)

### Tools
- [Angular CLI](https://angular.io/cli)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Postman](https://www.postman.com/)
- [DevTools](https://developer.chrome.com/docs/devtools/)

---

**Last Updated**: August 22, 2024  
**Version**: 1.0.0  
**Status**: ✅ Production Ready

---

<div align="center">

### Made with ❤️ by Hardik Joshi

[⬆ Back to top](#hardik-joshi---portfolio--wedding-invitation)

</div>
