import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  image: string;
  link?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements AfterViewInit {
  projects: Project[] = [
    { title: 'Portfolio Website', description: 'Angular portfolio with animations.', image: 'porfolio3d.png', link: '#' },
    { title: 'E-commerce App', description: 'Responsive shopping site.', image: 'tendances-e-commerce-2021-.jpg', link: 'https://azizkateb.github.io/Market/' },
    { title: 'Blog Platform', description: 'Blog with comments and auth.', image: 'Blog-intro.jpg', link: '#' },
    { title: 'Task Manager', description: 'Manage tasks with drag-and-drop.', image: 'task.jpg', link: '#' },
  ];

  ngAfterViewInit() {
    const elements = document.querySelectorAll('.animate-up');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target); 
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach(el => observer.observe(el));
  }
}
