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
   - Senior Software Engineer profile, .NET/Azure/API platform focus, contact links, and portrait.
3. **Metrics Ribbon (`.metrics-section`)**:
   - Resume-backed experience, API migration, and SQL query improvement metrics.
4. **Selected Engineering Work (`.projects-section`)**:
   - Professional work covering AI/RAG/MCP, API gateway migration, and SQL performance.
5. **Technical Skills (`.skills-section`)**:
   - Categorized resume skills without inferred proficiency ratings.
6. **Career Timeline (`.experience-section`)**:
   - Diebold Nixdorf, GEP Worldwide, and Zeus System roles, dates, responsibilities, and technologies.
7. **Education & Credentials (`.credentials-section`)**:
   - Education, Azure Fundamentals certification, and publications.
8. **Contact Section (`.contact-section`)**:
   - Email, phone, LinkedIn, and GitHub contact links.
9. **Footer (`.footer`)**:
   - Portfolio identity and navigation links.

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
   skills: string[];
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

### Updating Education, Certifications, or Publications
Edit the matching typed array (`education`, `certifications`, or `publications`) in `portfolio.component.ts`:
```typescript
{
   title: string;
   detail: string;
}
```

Keep dates, employers, outcomes, and qualifications aligned with verified resume details. Do not add unsupported metrics or skill ratings.
