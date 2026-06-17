import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../animations/reveal.directive';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './experience.html',
  styleUrls: ['./experience.css']
})
export class ExperienceComponent {

  experiences = [
    {
      company: 'SURE Trust',
      role: 'Full Stack Intern',
      period: 'October 2025 - April 2026',
      description:
        'Developed responsive web applications using modern web technologies.'
    },
    {
      company: 'Embrizon Technologies',
      role: 'Front-End Web Development',
      period: 'October 2024 - November 2024',
      description:
        'Developed a simple E-Commerce website using Frontend programming languages.'
    }
  ];

  certifications = [
    'ChatGPT102: Prompt Engineering - edX',
    'AI Fundamentals - IBM SkillsBuild',
    'Joy of Computing using Python - NPTEL',
    'The Java Language - Coursera'
  ];
}
