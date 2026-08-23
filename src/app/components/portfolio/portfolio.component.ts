import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

export interface Project {
  id: number;
  title: string;
  badge: string;
  tagline: string;
  description: string;
  highlights: string[];
  technologies: string[];
  link?: string;
  isInternalLink?: boolean;
  github?: string;
  icon: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  description: string;
  skills: { name: string; level: string; core?: boolean }[];
}

export interface Metric {
  value: string;
  label: string;
  detail: string;
  icon: string;
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  readonly name = 'Hardik Joshi';
  readonly role = 'Senior Full Stack Engineer & Angular Specialist';
  readonly location = 'Mumbai, India (Open to Remote & Relocation)';
  readonly status = 'Available for Full-Time Roles';
  readonly contactEmail = 'hvj.joshi06@gmail.com';
  readonly githubUrl = 'https://github.com/behardikjoshi';
  readonly linkedinUrl = 'https://linkedin.com/in/behardikjoshi';

  copiedToast = signal<boolean>(false);
  activeSkillTab = signal<string>('all');

  readonly metrics: Metric[] = [
    {
      value: '5+ Years',
      label: 'Professional Experience',
      detail: 'Enterprise Web Applications',
      icon: 'fa-solid fa-briefcase'
    },
    {
      value: 'Angular 17+',
      label: 'Frontend Mastery',
      detail: 'Signals, Standalone, RxJS & NgRx',
      icon: 'fa-brands fa-angular'
    },
    {
      value: 'Full-Stack',
      label: 'System Architecture',
      detail: 'Node.js, Express, REST & SQL',
      icon: 'fa-solid fa-layer-group'
    },
    {
      value: '100%',
      label: 'Commitment & Quality',
      detail: 'Clean Code & High Performance',
      icon: 'fa-solid fa-shield-halved'
    }
  ];

  readonly projects: Project[] = [
    {
      id: 1,
      title: 'Enterprise Analytics & Operations Platform',
      badge: 'Architecture',
      tagline: 'High-Performance Modular Angular Dashboard Suite',
      description: 'Architected a scalable real-time analytics web platform built with Angular standalone components, advanced RxJS state pipelines, and lazy-loaded microfrontends.',
      highlights: [
        'Reduced initial bundle load time by 42% using standalone components and route-level code splitting.',
        'Engineered responsive real-time data visualisations with interactive charts and exportable reporting.',
        'Implemented strict TypeScript type safety and reusable reactive UI component library.'
      ],
      technologies: ['Angular 17+', 'TypeScript', 'RxJS', 'Node.js', 'REST APIs', 'Chart.js', 'CSS Modules'],
      github: 'https://github.com/behardikjoshi',
      icon: 'fa-solid fa-chart-line'
    },
    {
      id: 2,
      title: 'Cloud Inventory & Order Management Suite',
      badge: 'Full Stack',
      tagline: 'End-to-End Enterprise Resource & Order Processing System',
      description: 'Engineered a resilient full-stack transaction and order processing application with secure role-based JWT authentication, automated invoice generation, and audit logging.',
      highlights: [
        'Built secure RESTful microservice endpoints with Node.js/Express handling high concurrency.',
        'Structured transactional database schemas with optimized query performance and indexing.',
        'Designed intuitive administrative panels with live order status trackers and toast notifications.'
      ],
      technologies: ['Angular', 'Node.js', 'Express', 'SQL Server / MongoDB', 'JWT Auth', 'Docker'],
      github: 'https://github.com/behardikjoshi',
      icon: 'fa-solid fa-boxes-stacked'
    },
    {
      id: 3,
      title: 'FinFlow - Real-Time Market Analytics & Trading Engine',
      badge: 'Real-Time WebSockets',
      tagline: 'High-Throughput Financial Telemetry & Interactive Charting Platform',
      description: 'Engineered a real-time market data streaming platform featuring sub-100ms WebSocket price feeds, interactive depth charts, and automated limit order simulators.',
      highlights: [
        'Built reactive state pipelines with RxJS Subject buffers and NgRx for ultra-smooth UI chart updates.',
        'Integrated multi-timeframe candlestick visualisations with exportable technical indicators.',
        'Implemented resilient reconnection backoff algorithms and client-side data caching strategies.'
      ],
      technologies: ['Angular 17+', 'TypeScript', 'RxJS', 'WebSockets', 'Chart.js / D3', 'Node.js', 'TailwindCSS'],
      github: 'https://github.com/behardikjoshi',
      icon: 'fa-solid fa-arrow-trend-up'
    },
    {
      id: 4,
      title: 'DevSync - Agile Task & Sprint Orchestrator',
      badge: 'Real-time UI',
      tagline: 'Collaborative Kanban & Workflow Management Web App',
      description: 'Developed an interactive productivity tool enabling development teams to manage sprints, drag-and-drop user stories, and track velocity metrics with optimistic UI updates.',
      highlights: [
        'Leveraged Angular CDK drag-and-drop modules for ultra-smooth board interactions.',
        'Architected state synchronization ensuring zero-latency updates across active team views.',
        'Provided comprehensive search, multi-tag filtering, and sprint analytics.'
      ],
      technologies: ['Angular', 'TypeScript', 'Angular CDK', 'RxJS', 'TailwindCSS', 'Firebase'],
      github: 'https://github.com/behardikjoshi',
      icon: 'fa-solid fa-list-check'
    }
  ];

  readonly skillCategories: SkillCategory[] = [
    {
      title: 'Frontend Engineering',
      icon: 'fa-solid fa-code',
      description: 'Crafting responsive, high-performance web applications with modern Angular ecosystems.',
      skills: [
        { name: 'Angular (v14 - v17+)', level: 'Expert', core: true },
        { name: 'TypeScript', level: 'Expert', core: true },
        { name: 'RxJS & Signals', level: 'Advanced', core: true },
        { name: 'NgRx / State Management', level: 'Advanced', core: true },
        { name: 'HTML5 & Modern CSS3 / SCSS', level: 'Expert', core: true },
        { name: 'JavaScript (ES6+)', level: 'Expert', core: true },
        { name: 'Responsive UI / Flexbox & Grid', level: 'Expert' },
        { name: 'Microfrontends & Webpack/Vite', level: 'Intermediate' }
      ]
    },
    {
      title: 'Backend & API Architecture',
      icon: 'fa-solid fa-server',
      description: 'Building robust, scalable server-side systems and resilient API interfaces.',
      skills: [
        { name: 'Node.js & Express', level: 'Advanced', core: true },
        { name: 'RESTful API Design', level: 'Expert', core: true },
        { name: 'JWT & OAuth Authentication', level: 'Advanced', core: true },
        { name: 'C# / .NET Fundamentals', level: 'Proficient' },
        { name: 'API Security & Rate Limiting', level: 'Advanced' },
        { name: 'Microservices Concepts', level: 'Intermediate' }
      ]
    },
    {
      title: 'Database & Cloud Infrastructure',
      icon: 'fa-solid fa-database',
      description: 'Designing data schemas, query optimization, and deploying modern cloud workflows.',
      skills: [
        { name: 'SQL Server / T-SQL', level: 'Advanced', core: true },
        { name: 'MongoDB / NoSQL', level: 'Proficient', core: true },
        { name: 'GitHub Actions / CI/CD', level: 'Advanced', core: true },
        { name: 'Docker & Containerization', level: 'Intermediate' },
        { name: 'GitHub Pages & Cloud Hosting', level: 'Advanced' }
      ]
    },
    {
      title: 'DevOps, Tooling & Practices',
      icon: 'fa-solid fa-screwdriver-wrench',
      description: 'Driving engineering excellence, automated testing, and agile collaboration.',
      skills: [
        { name: 'Git & GitHub Collaboration', level: 'Expert', core: true },
        { name: 'Jasmine / Karma Unit Testing', level: 'Advanced', core: true },
        { name: 'Performance Profiling & SEO', level: 'Advanced' },
        { name: 'Agile / Scrum Methodologies', level: 'Advanced' },
        { name: 'Code Review & Mentorship', level: 'Advanced' }
      ]
    }
  ];

  readonly experience: ExperienceItem[] = [
    {
      period: '2021 — PRESENT',
      role: 'Senior Full Stack Software Engineer',
      company: 'Enterprise Software Solutions',
      location: 'Mumbai, India',
      description: 'Lead frontend architect and full-stack contributor driving enterprise digital transformation, modern web application architecture, and performance optimization.',
      achievements: [
        'Spearheaded Angular architecture modernization across key enterprise modules, improving responsiveness by 35%.',
        'Implemented robust CI/CD deployment pipelines using GitHub Actions, reducing deployment cycle times from hours to minutes.',
        'Mentored junior engineers on Angular best practices, reactive patterns with RxJS, and clean architecture standards.'
      ],
      technologies: ['Angular', 'TypeScript', 'Node.js', 'RxJS', 'SQL Server', 'GitHub Actions']
    },
    {
      period: '2019 — 2021',
      role: 'Software Developer',
      company: 'Technology Consulting Services',
      location: 'Mumbai, India',
      description: 'Developed scalable client-facing web applications, REST APIs, and database integrations for financial and commerce clients.',
      achievements: [
        'Built dynamic single-page applications with reusable Angular components and seamless backend integrations.',
        'Optimized complex SQL queries and database schemas, resulting in 40% faster report generation.',
        'Collaborated with cross-functional product and UX teams to deliver pixel-perfect responsive layouts.'
      ],
      technologies: ['Angular', 'JavaScript', 'TypeScript', 'Node.js', 'Express', 'SQL', 'HTML5/CSS3']
    }
  ];

  copyEmail(): void {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(this.contactEmail).then(() => {
        this.showToast();
      }).catch(() => {
        this.fallbackCopy();
      });
    } else {
      this.fallbackCopy();
    }
  }

  private fallbackCopy(): void {
    const tempInput = document.createElement('input');
    tempInput.value = this.contactEmail;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    this.showToast();
  }

  private showToast(): void {
    this.copiedToast.set(true);
    setTimeout(() => {
      this.copiedToast.set(false);
    }, 3000);
  }
}

