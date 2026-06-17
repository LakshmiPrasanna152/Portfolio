import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../animations/reveal.directive';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './project.html',
  styleUrls: ['./project.css']
})
export class ProjectsComponent {

  projects = [
    
    {
      title: 'Care Connect',
      description:
        'AI Healthcare Appointment System — Built a full-stack healthcare appointment system with real-time doctor availability, AI chatbot, NLP-based symptom checker, and role-based dashboards for patients and doctors.',
      gradient: 'blue',
      image: 'careconnect.png',
      tech: ['HTML5', 'Tailwind CSS', 'Python Flask', 'SQLite'],
      github: 'https://github.com/LakshmiPrasanna152/care-connect'
    },
    {
      title: 'ML Supervised Learning Studio',
      description:
        'Interactive Web Service — Developed an interactive machine learning web app using Streamlit to train, evaluate and visualize multiple supervised learning models in real time with end-to-end ML pipeline.',
      gradient: 'purple',
      image: 'mlstudio.png',
      tech: ['Streamlit', 'Matplotlib', 'NumPy', 'scikit-learn', 'Pandas'],
      github: 'https://github.com/LakshmiPrasanna152/supervised_web'
    },
    {
      title: 'Knowledge-Based-FAQ-Generator',
      description:
        'Create a tool that automatically generates FAQ sections from business documents using LLMs.',
      gradient: 'blue',
      image: 'Faq_Generator.png',
      tech: ['React.js', 'Fast API','Tailwind CSS', 'LLMs', 'SQLite'],
      github: 'https://github.com/LakshmiPrasanna152/Knowledge-Based-Faq-Generator'
    },
  ];
}
