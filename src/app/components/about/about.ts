import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../animations/reveal.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './about.html',
  styleUrls: ['./about.css']
})
export class AboutComponent {
  cards = [
    {
      title: 'Full Stack Development',
      description:
        'Building scalable web applications using React.js, Python Flask, Node.js, MySQL and modern frontend technologies.',
      icon: '<>'
    },
    {
      title: 'AI & Machine Learning',
      description:
        'Exploring AI tools and building ML-powered apps like an AI Healthcare chatbot and an interactive ML Supervised Learning Studio.',
      icon: '🤖'
    },
    {
      title: 'Education',
      description:
        'B.Tech in Computer Science & Engineering (2022–2026) at Sri Padmavati Mahila Visvavidyalayam, Tirupati.',
      icon: '🎓'
    },
  ];
}
