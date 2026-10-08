import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Project {
  id: number;
  title: string;
  badge: string;
  tagline: string;
  description: string;
  highlights: string[];
  technologies: string[];
  icon: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  description: string;
  skills: string[];
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

export interface CredentialItem {
  title: string;
  detail: string;
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  readonly currentYear = new Date().getFullYear();
  readonly name = 'Hardik Joshi';
  readonly role = 'Senior Software Engineer';
  readonly location = 'Mumbai, India';
  readonly contactEmail = 'hvj.joshi06@gmail.com';
  readonly contactPhone = '+91 9970589755';
  readonly resumeRequestMessage = 'Hi, I came across your profile on GitHub. Could you please share your updated resume?';
  readonly resumeEmailUrl = `mailto:${this.contactEmail}?subject=${encodeURIComponent('Request for updated resume')}&body=${encodeURIComponent(this.resumeRequestMessage)}`;
  readonly resumeWhatsAppUrl = `https://wa.me/919970589755?text=${encodeURIComponent(this.resumeRequestMessage)}`;
  readonly githubUrl = 'https://github.com/behardikjoshi';
  readonly linkedinUrl = 'https://linkedin.com/in/hardik-joshi-a71645136';

  copiedToast = signal<boolean>(false);
  activeSkillTab = signal<string>('all');

  readonly metrics: Metric[] = [
    {
      value: '7+ Years',
      label: 'Professional Experience',
      detail: 'Software engineering',
      icon: 'fa-solid fa-briefcase'
    },
    {
      value: '30+ APIs',
      label: 'Migration to KrakenD',
      detail: 'From MuleSoft API Gateway',
      icon: 'fa-solid fa-right-left'
    },
    {
      value: '25%',
      label: 'SQL Query Time Reduction',
      detail: 'At Zeus System Pvt. Ltd.',
      icon: 'fa-solid fa-database'
    }
  ];

  readonly projects: Project[] = [
    {
      id: 1,
      title: 'Resource Manager RAG Chatbot',
      badge: 'AI & MCP',
      tagline: 'Retrieval-augmented assistant on Azure Functions',
      description: 'Building a RAG chatbot for Resource Manager that answers from company documents and uses MCP tools to access product microservices.',
      highlights: [
        'Running the chatbot in an Azure Functions app.',
        'Using MCP tools to call product microservices and turn JSON responses into user-friendly answers.'
      ],
      technologies: ['RAG', 'AI Agents', 'MCP', 'Azure Functions', 'Microservices'],
      icon: 'fa-solid fa-robot'
    },
    {
      id: 2,
      title: 'Data Analytics MCP Integration',
      badge: 'Data & MCP',
      tagline: 'Analytics integration exposed through MCP tools',
      description: 'Developing a data analytics integration that moves reporting data into an analytics database and exposes it to AI workflows.',
      highlights: [
        'Building MCP tools as a data access layer for analytical user queries.',
        'Connecting reporting-source data with an analytics database.'
      ],
      technologies: ['MCP', 'Data Analytics', 'Microservices'],
      icon: 'fa-solid fa-chart-column'
    },
    {
      id: 3,
      title: 'API Gateway Modernization',
      badge: 'API Architecture',
      tagline: 'MuleSoft API migration to KrakenD',
      description: 'Led the migration of 30+ APIs from MuleSoft to KrakenD API Gateway, supporting API security with OAuth 2.0 and IdentityServer4.',
      highlights: [
        'Led migration of more than 30 APIs to KrakenD.',
        'Used OAuth 2.0 and IdentityServer4 for authorization and identity.'
      ],
      technologies: ['KrakenD', 'MuleSoft', 'OAuth 2.0', 'IdentityServer4'],
      icon: 'fa-solid fa-route'
    },
    {
      id: 4,
      title: 'SQL Performance & ClosedXML Library',
      badge: 'Engineering',
      tagline: 'Database optimization and spreadsheet tooling',
      description: 'At Zeus System Pvt. Ltd., improved SQL query time and built a library using ClosedXML.',
      highlights: [
        'Reduced SQL query time by 25%.',
        'Built a ClosedXML library.'
      ],
      technologies: ['SQL Server', 'ClosedXML'],
      icon: 'fa-solid fa-gauge-high'
    }
  ];

  readonly skillCategories: SkillCategory[] = [
    {
      title: 'Backend & API Architecture',
      icon: 'fa-solid fa-server',
      description: 'Backend development, API gateways, identity, and distributed services.',
      skills: ['C#', '.NET 10 / .NET 8', 'ASP.NET Core', 'GoLang', 'Microservices', 'REST APIs', 'KrakenD API Gateway', 'OpenAPI Specification', 'OpenAPI-to-MCP', 'OAuth 2.0', 'IdentityServer4', 'JWT']
    },
    {
      title: 'AI & Messaging',
      icon: 'fa-solid fa-diagram-project',
      description: 'AI integrations and asynchronous service communication.',
      skills: ['AI Agents & Tool Calling', 'RAG', 'MCP Server (C# SDK)', 'Multi-Agent Orchestration', 'Local AI Agents', 'Kafka', 'RabbitMQ']
    },
    {
      title: 'Cloud & DevOps',
      icon: 'fa-solid fa-cloud',
      description: 'Cloud platforms, orchestration, and delivery pipelines.',
      skills: ['Azure AKS', 'Azure Functions', 'Jenkins Pipelines', 'Azure DevOps Pipelines', 'Docker', 'AWS (exposure)', 'Git']
    },
    {
      title: 'Application & Data',
      icon: 'fa-solid fa-database',
      description: 'Web applications, databases, and data integration tooling.',
      skills: ['Angular 16+', 'TypeScript', 'Python', 'Django', 'SQL Server / T-SQL', 'CouchDB', 'MongoDB', 'MySQL', 'Snowflake', 'SSIS', 'SSRS', 'Camunda', 'ClosedXML']
    },
    {
      title: 'Testing',
      icon: 'fa-solid fa-vial',
      description: 'Automated testing across application and delivery workflows.',
      skills: ['XUnit', 'Cypress']
    }
  ];

  readonly experience: ExperienceItem[] = [
    {
      period: 'Oct 2022 — Present',
      role: 'Senior Software Engineer (Aug 2025–Present); Software Engineer (Oct 2022–Jul 2025)',
      company: 'Diebold Nixdorf',
      location: 'Mumbai, India',
      description: 'Progressed from Software Engineer to Senior Software Engineer.',
      achievements: [
        'Developed a RAG chatbot for Resource Manager on Azure Functions, with MCP tools invoking product microservices.',
        'Integrated data analytics through MCP tools and built a C# OpenAPI-to-MCP server for API Gateway.',
        'Upgraded from .NET 8 to .NET 10 and led migration of 30+ APIs from MuleSoft to KrakenD.',
        'Worked with Azure AKS, Kafka, RabbitMQ, Jenkins, OAuth 2.0, and IdentityServer4.'
      ],
      technologies: ['C#', '.NET 10 / .NET 8', 'Azure Functions', 'Azure AKS', 'KrakenD', 'MCP', 'Kafka', 'RabbitMQ', 'Jenkins']
    },
    {
      period: 'Sep 2021 — Oct 2022',
      role: 'Software Engineer',
      company: 'GEP Worldwide',
      location: 'Mumbai, India',
      description: 'Developed ASP.NET Core APIs and web applications.',
      achievements: [
        'Worked with Angular 16+, SQL Server, MongoDB, and Camunda.',
        'Used XUnit, Cypress, and Azure Pipelines.'
      ],
      technologies: ['ASP.NET Core', 'Angular 16+', 'SQL Server', 'MongoDB', 'Camunda', 'XUnit', 'Cypress', 'Azure Pipelines']
    },
    {
      period: 'Jun 2019 — Sep 2021',
      role: 'Software Engineer',
      company: 'Zeus System Pvt. Ltd.',
      location: 'Mumbai, India',
      description: 'Worked across web application development, databases, and data integration.',
      achievements: [
        'Developed with ASP.NET Core, Angular, Python/Django, and SQL Server.',
        'Reduced SQL query time by 25% and built a ClosedXML library.',
        'Worked with Docker, Snowflake, SSIS, SSRS, and AWS.'
      ],
      technologies: ['ASP.NET Core', 'Angular', 'Python', 'Django', 'SQL Server', 'Docker', 'Snowflake', 'SSIS', 'SSRS', 'AWS']
    }
  ];

  readonly education: CredentialItem[] = [
    {
      title: 'BE Computer Engineering',
      detail: 'University of Mumbai · 2015–2019 · CGPA 8.86'
    }
  ];

  readonly certifications: CredentialItem[] = [
    {
      title: 'Microsoft Certified: Azure Fundamentals',
      detail: 'AZ-900'
    }
  ];

  readonly publications: CredentialItem[] = [
    {
      title: 'Crop Yield Prediction Using Supervised Machine Learning Algorithm',
      detail: 'IOSR Journal of Engineering · 2019'
    },
    {
      title: 'Application Software Using IoT Sensors for Vehicle Parking',
      detail: 'IOSR ICIATE · 2018'
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

