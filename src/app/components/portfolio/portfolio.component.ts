import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

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

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  name = 'Hardik Joshi';
  title = 'Full Stack Developer';
  
  projects: Project[] = [
    {
      id: 1,
      title: 'Wedding Invitation Website',
      description: 'An elegant wedding invitation website with countdown timer and venue information.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'jQuery'],
      link: '/wedding-invite'
    },
    // Add more projects here
  ];

  skills: Skill[] = [
    {
      category: 'Frontend',
      items: ['Angular', 'TypeScript', 'HTML5', 'CSS3', 'JavaScript']
    },
    {
      category: 'Backend',
      items: ['Node.js', 'Express', 'REST APIs']
    },
    {
      category: 'Tools',
      items: ['Git', 'GitHub', 'VS Code', 'npm']
    }
  ];

  contactEmail = 'hvj.joshi06@gmail.com';
}
