# Hardik Joshi — Senior Full Stack Engineer & Angular Specialist Portfolio

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Angular](https://img.shields.io/badge/Angular-17%2B-dd0031?logo=angular&logoColor=white)](https://angular.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.2%2B-3178c6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-20%2B-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![GitHub Actions CI/CD](https://img.shields.io/badge/CI%2FCD-GitHub%20Actions-2088FF?logo=githubactions&logoColor=white)](https://github.com/behardikjoshi/behardikjoshi.github.io/actions)
[![Live Site](https://img.shields.io/badge/Live%20Site-behardikjoshi.github.io-00C7B7?logo=github)](https://behardikjoshi.github.io/)

A modern, high-performance personal portfolio website built with **Angular Standalone Components**, **TypeScript**, and **Vanilla CSS Design Tokens**. Engineered to showcase enterprise-grade full-stack projects, core technical competencies, career milestones, and engineering achievements with a dark luxury glassmorphic interface.

---

## 📋 Table of Contents

- [Project Overview](#-project-overview)
- [Architecture & Design](#-architecture--design)
- [Core Features](#-core-features)
- [Technology Stack](#-technology-stack)
- [Project Directory Structure](#-project-directory-structure)
- [Getting Started & Local Development](#-getting-started--local-development)
- [Build & Deployment Pipeline](#-build--deployment-pipeline)
- [Configuration](#-configuration)
- [Performance & Optimization](#-performance--optimization)
- [Component Documentation](#-component-documentation)
- [Author & Contact](#-author--contact)

---

## 🎯 Project Overview

This repository powers **[behardikjoshi.github.io](https://behardikjoshi.github.io/)**, the personal engineering showcase of **Hardik Joshi** (Senior Full Stack Engineer & Angular Specialist).

The application is structured following modern Angular best practices:
- **Standalone Component Model**: Modular, tree-shakeable architecture without `NgModule` boilerplate.
- **Signal-Ready Reactivity**: Efficient state handling and UI event synchronization.
- **Zero-Dependency Styling**: Bespoke modern glassmorphism design system using Vanilla CSS custom properties.
- **Automated CI/CD**: Seamless GitHub Actions deployment pipeline targeting GitHub Pages with SPA deep-link routing support.

---

## 🏗️ Architecture & Design

### High-Level System Architecture

```
┌────────────────────────────────────────────────────────────────────────┐
│                        GitHub Pages Edge CDN                          │
│                   https://behardikjoshi.github.io/                     │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
                                    │ Automated Deployment
                                    ↓
┌────────────────────────────────────────────────────────────────────────┐
│                GitHub Actions Workflow (deploy.yml)                   │
│        Builds Angular 22 -> Generates 404.html & .nojekyll -> Deploy    │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
                                    ↓
┌────────────────────────────────────────────────────────────────────────┐
│                        Angular 22 SPA Runtime                         │
│                    (Standalone Component Architecture)                 │
├────────────────────────────────────────────────────────────────────────┤
│  Routing & Navigation                                                 │
│  ├── /                → PortfolioComponent (Homepage)                  │
│  └── Wildcard (**)    → Redirects to Root                              │
├────────────────────────────────────────────────────────────────────────┤
│  Portfolio Architecture Modules                                        │
│  ├── Hero Section     (Bio, Status Pill, Animated Avatar, CTAs)        │
│  ├── Metrics Ribbon   (Quantified Experience & Engineering Impact)     │
│  ├── Projects Grid    (Architecture Highlights, Tech Tags, Live Links) │
│  ├── Skills Matrix    (Categorized Competencies, Core Stars, Badges)   │
│  ├── Career Timeline  (Chronological History, Deliverables)            │
│  └── Recruiter CTA    (1-Click Email Copy, Social Connects, Contact)   │
├────────────────────────────────────────────────────────────────────────┤
│  Global Design Tokens & Base CSS                                      │
│  ├── Glassmorphism, Neon Glow Accents, Color Gradients                 │
│  └── Modern Typography: Plus Jakarta Sans, Inter, JetBrains Mono       │
└────────────────────────────────────────────────────────────────────────┘
```

---

## ⚡ Core Features

1. **Recruiter-Centric Presentation**:
   - Availability status indicator (`🟢 Available for Full-Time Roles`).
   - Quantified achievements highlighting 5+ years of enterprise experience.
   - One-click copy email button with animated toast notification.
2. **Featured Engineering Projects**:
   - Enterprise Analytics & Operations Platform.
   - Cloud Inventory & Order Management Suite.
   - FinFlow - Real-Time Market Analytics & Trading Engine.
   - DevSync - Agile Task & Sprint Orchestrator.
3. **Comprehensive Skills Matrix**:
   - Categorized across Frontend, Backend & APIs, Database & Cloud, and DevOps & Tooling.
   - Starred core specializations and proficiency tags (`Expert`, `Advanced`, `Proficient`).
4. **Interactive Career Roadmap**:
   - Visual timeline displaying roles, responsibilities, technical achievements, and technology stacks.
5. **SEO & Social Preview Optimization**:
   - Full OpenGraph metadata, Twitter cards, and structured semantic HTML for discovery and recruitment visibility.

---

## 🛠️ Technology Stack

| Domain | Technologies |
| :--- | :--- |
| **Frontend Framework** | Angular (Standalone Components & Signals) |
| **Language & Typings** | TypeScript (Strict Mode) |
| **Reactivity & State** | RxJS 7.8.0, Angular Signals |
| **Styling & UI** | Vanilla CSS3, CSS Custom Properties, Glassmorphism, Flexbox/Grid |
| **Typography & Icons** | Google Fonts (Plus Jakarta Sans, Inter, JetBrains Mono), FontAwesome 6 |
| **Build Tooling** | Angular CLI, Node.js 20+ |
| **CI/CD & Hosting** | GitHub Actions, GitHub Pages (CDN) |

---

## 📁 Project Directory Structure

```
behardikjoshi.github.io/
├── .github/
│   └── workflows/
│       └── deploy.yml              # Automated GitHub Actions deployment pipeline
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── portfolio/          # Main Portfolio component
│   │   │   │   ├── portfolio.component.ts
│   │   │   │   ├── portfolio.component.html
│   │   │   │   ├── portfolio.component.css
│   │   │   │   └── README.md       # Portfolio component docs
│   │   │   └── wedding-invite/     # Standalone utility component (private)
│   │   │       ├── wedding-invite.component.ts
│   │   │       ├── wedding-invite.component.html
│   │   │       ├── wedding-invite.component.css
│   │   │       └── README.md       # Standalone component docs
│   │   ├── app.component.ts        # Root app component (<router-outlet>)
│   │   ├── app.config.ts           # App configuration & routing providers
│   │   └── app.routes.ts           # Route declarations
│   ├── assets/
│   │   ├── img/                    # Profile images & avatars
│   │   └── wedding/                # Preserved media assets
│   ├── favicon.png                 # Site favicon
│   ├── index.html                  # HTML entry point with fonts & SEO meta
│   ├── main.ts                     # Angular bootstrapping
│   └── styles.css                  # Global design tokens & CSS resets
├── angular.json                    # Angular CLI build & workspace configuration
├── package.json                    # Dependencies and npm scripts
├── tsconfig.json                   # TypeScript configuration (strict mode)
└── README.md                       # Main repository documentation
```

---

## 🚀 Getting Started & Local Development

### Prerequisites
- **Node.js**: v20.x or higher
- **npm**: v10.x or higher
- **Angular CLI**: v22.x (`npm install -g @angular/cli`)

### Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/behardikjoshi/behardikjoshi.github.io.git
   cd behardikjoshi.github.io
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start local development server**:
   ```bash
   npm start
   ```
   Open `http://localhost:4200/` in your browser.

---

## 📦 Build & Deployment Pipeline

### Production Build

To compile and optimize the application for production:
```bash
npm run build
```
Build outputs are generated in `dist/behardikjoshi-portfolio/` with minification, tree-shaking, and cache-busting hashes.

### GitHub Actions CI/CD Pipeline

Every push to the `main` branch triggers `.github/workflows/deploy.yml`:
1. Checks out repository and sets up Node.js 20.
2. Installs dependencies using `npm ci`.
3. Compiles production bundle with `npm run build`.
4. Copies `index.html` to `404.html` and creates `.nojekyll` for client-side routing.
5. Deploys the build artifact directly to **GitHub Pages**.

---

## ⚙️ Configuration

- **`angular.json`**: Configured with `"baseHref": "/"` for root domain deployment and tuned production asset budgets.
- **`tsconfig.json`**: Configured with strict type checking, ES2022 target, and modern bundler module resolution.

---

## ⚡ Performance & Optimization

- **Bundle Optimization**: Standalone components eliminate unnecessary module imports, resulting in minimal bundle sizes.
- **CSS Architecture**: Pure Vanilla CSS prevents heavyweight external utility frameworks from bloating initial payload.
- **Asset Optimization**: Responsive imagery and asynchronous font loading via Google Fonts `preconnect`.

---

## 📖 Component Documentation

For in-depth documentation regarding individual components:
- [Portfolio Component README](src/app/components/portfolio/README.md)
- [Wedding Invite Component README](src/app/components/wedding-invite/README.md)

---

## 📬 Author & Contact

**Hardik Joshi** — *Senior Full Stack Engineer & Angular Specialist*
- **Email**: [hvj.joshi06@gmail.com](mailto:hvj.joshi06@gmail.com)
- **GitHub**: [github.com/behardikjoshi](https://github.com/behardikjoshi)
- **LinkedIn**: [linkedin.com/in/behardikjoshi](https://linkedin.com/in/behardikjoshi)
- **Portfolio**: [behardikjoshi.github.io](https://behardikjoshi.github.io/)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
