# Portfolio Component (`PortfolioComponent`)

The `PortfolioComponent` serves as the primary root landing page for the application (`/`), presenting a comprehensive overview of Hardik Joshi's technical background, projects, skill matrix, and career milestones.

---

## 🏛️ Architecture & Component Details

- **Type**: Standalone Angular Component (`standalone: true`)
- **Selector**: `app-portfolio`
- **Route**: `/`
- **Imports**: `CommonModule`, `RouterLink`

### State Management
- Utilizes Angular Signals (`signal<boolean>`) for reactive local UI states such as the email copy toast notification (`copiedToast`).
- Clean separation of typed data structures (`Project`, `SkillCategory`, `Metric`, `ExperienceItem`).

---

## 🧩 Sections Breakdown

1. **Top Navigation Bar (`.navbar`)**:
   - Sticky frosted glass header with navigation jump links and quick contact CTA.
2. **Hero Section (`.hero-section`)**:
   - Availability badge (`🟢 Available for Full-Time Roles`).
   - Title, subtitle, value proposition, action buttons, animated avatar with floating tech pills.
3. **Metrics Ribbon (`.metrics-section`)**:
   - 4-card grid highlighting years of experience, Angular mastery, full-stack systems, and quality standards.
4. **Featured Projects (`.projects-section`)**:
   - Enterprise projects with architecture tags, bulleted impact points, technology tags, and repository links.
5. **Technical Competencies (`.skills-section`)**:
   - Categorized cards for Frontend, Backend/APIs, Database/Cloud, and DevOps/Practices.
6. **Career Timeline (`.experience-section`)**:
   - Vertical milestone roadmap with role details, achievements, and tech stacks.
7. **Recruiter Contact Section (`.contact-section`)**:
   - High-conversion contact card with one-click email copy button and direct communication links.
8. **Footer (`.footer`)**:
   - Copyright, credits, and navigation links.

---

## 🛠️ Customization Guide

### Updating Projects
Edit `projects` array in `portfolio.component.ts`:
```typescript
{
  id: number;
  title: string;
  badge: string;
  tagline: string;
  description: string;
  highlights: string[];
  technologies: string[];
  github?: string;
  link?: string;
  icon: string;
}
```

### Updating Skills
Edit `skillCategories` array in `portfolio.component.ts`:
```typescript
{
  title: string;
  icon: string;
  description: string;
  skills: { name: string; level: string; core?: boolean }[];
}
```

### Updating Experience
Edit `experience` array in `portfolio.component.ts`:
```typescript
{
  period: string;
  role: string;
  company: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
}
```
