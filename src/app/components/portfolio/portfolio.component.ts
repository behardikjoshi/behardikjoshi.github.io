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
      description: 'Progressed from Software Engineer to Senior Software Engineer while building cloud-native microservices, API gateway integrations, and AI agent capabilities.',
      achievements: [
        'Building an AI chatbot for the Resource Manager UI on Azure Functions using RAG over company documents for context-grounded answers.',
        'Integrated an MCP server into the agent Function App so the AI agent calls product microservices and converts JSON responses into user-friendly answers.',
        'Developing a data analytics integration that moves reporting-source data into an analytics database and exposes it through MCP tools for analytical queries.',
        'Led the production application upgrade from .NET 8 to .NET 10: assessed API compatibility, resolved breaking changes, updated NuGet dependencies, and validated post-upgrade performance.',
        'Developing new .NET 10 microservices and features using minimal APIs, runtime improvements, and performance enhancements.',
        'Built an API Gateway MCP server with the C# MCP SDK by parsing OpenAPI specifications, allowing AI agents to discover and invoke APIs.',
        'Built a local multi-agent orchestration system for VS Code workflows and incremental feature development.',
        'Architected and deployed microservices on Azure Kubernetes Service; managed orchestration, autoscaling, health probes, and rolling deployments.',
        'Integrated RabbitMQ and Kafka for event-driven microservices; designed consumer groups, dead-letter queues, and retry policies.',
        'Built Jenkins CI/CD pipelines for automated build, test, and deployment across development, staging, and production.',
        'Led migration of 30+ APIs from MuleSoft to KrakenD API Gateway, improving performance, reducing latency, and optimizing public API generation.',
        'Implemented tenant- and user-based authentication with IdentityServer4 and OAuth 2.0 for multi-tenant enterprise applications.',
        'Developed a .NET 8 Web API authentication layer with SQL Server and synchronized data with CouchDB for high-speed retrieval.',
        'Built and maintained PAG Cloud and Edge proxy gateways for secure backend-to-backend API communication.',
        'Developed GoLang APIs in a custom microservices framework for backend data processing pipelines.',
        'Mentored junior developers, led knowledge-transfer sessions, and supported Agile sprint delivery across cross-functional teams.',
        'Received a Certificate of Appreciation for delivering a project from scratch; earned above-expectation annual performance reviews.'
      ],
      technologies: ['.NET 10', '.NET 8', 'C#', 'ASP.NET Core', 'KrakenD', 'MCP Server', 'RAG', 'Azure Functions', 'OpenAPI', 'AKS', 'RabbitMQ', 'Kafka', 'Jenkins', 'OAuth 2.0', 'IdentityServer4', 'GoLang', 'Angular 19+', 'SQL Server', 'CouchDB', 'Docker', 'Azure DevOps']
    },
    {
      period: 'Sep 2021 — Oct 2022',
      role: 'Software Engineer',
      company: 'GEP Worldwide',
      location: 'Mumbai, India',
      description: 'Developed REST APIs and Angular applications for supply-chain domain operations.',
      achievements: [
        'Developed and maintained RESTful APIs with ASP.NET Core Web API for supply-chain backend operations.',
        'Designed Angular 16+ UI components to improve user experience and application performance.',
        'Optimized SQL Server stored procedures to improve database efficiency and query performance.',
        'Used MongoDB for NoSQL data storage and Camunda for business-process workflow automation.',
        'Automated unit tests with XUnit and UI tests with Cypress; deployed through Azure Pipelines.',
        'Led API and database performance optimization to reduce response times and improve system efficiency.'
      ],
      technologies: ['ASP.NET Core 3.1', '.NET 6', 'Web API', 'Angular 16+', 'SQL Server', 'MongoDB', 'Azure Pipelines', 'XUnit', 'Cypress', 'Camunda']
    },
    {
      period: 'Jun 2019 — Sep 2021',
      role: 'Software Engineer',
      company: 'Zeus System Pvt. Ltd.',
      location: 'Mumbai, India',
      description: 'Built full-stack e-learning applications and data solutions across .NET, Angular, Python, and SQL Server.',
      achievements: [
        'Developed e-learning applications with ASP.NET Core Web API and Angular 11+.',
        'Designed Python/Django REST APIs for high traffic with a focus on stability and performance.',
        'Implemented SQL Server stored procedures and indexes, reducing query execution time by 25%.',
        'Built a ClosedXML library in .NET Core for document automation and Excel data extraction.',
        'Integrated HubSpot, Google Tag Manager, Google Analytics, and Hotjar for tracking and marketing automation.',
        'Led data migration and warehousing with Snowflake, SSIS, and SSRS.',
        'Deployed applications with Docker and gained AWS infrastructure exposure for deployment and optimization.'
      ],
      technologies: ['ASP.NET Core 3.0+', 'ASP.NET Core 2.0+', 'Web API', 'Angular 11+', 'Python', 'Django', 'SQL Server', 'Docker', 'AWS', 'Snowflake', 'SSIS', 'SSRS', 'ClosedXML']
    }
  ];

  readonly education: CredentialItem[] = [
    {
      title: 'Bachelor of Engineering, Computer Engineering',
      detail: 'University of Mumbai · 2015–2019 · CGPA 8.86'
    }
  ];

  readonly certifications: CredentialItem[] = [
    {
      title: 'Microsoft Certified: Azure Fundamentals',
      detail: 'AZ-900 · Microsoft · Oct 2026–Present · ID: 6B730B46C7EF1976'
    },
    {
      title: 'Docker Essentials: A Developer Introduction',
      detail: 'IBM · Jul 2020–Present'
    },
    {
      title: 'Data Science Foundations – Level 1',
      detail: 'IBM · Jun 2020–Present'
    },
    {
      title: 'iOS Application Development with Swift 4',
      detail: 'Cognitio (Apple Authorized Training) · Jul 2018–Present'
    },
    {
      title: 'IBM Machine Learning Essentials – 2017',
      detail: 'IBM · Jul 2018–Present'
    },
    {
      title: 'Introduction to Modern Application Development',
      detail: 'NPTEL · May 2017–Present · ID: NPTEL17CS0626540034AN'
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

