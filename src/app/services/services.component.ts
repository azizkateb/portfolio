import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common'; // <-- needed for *ngFor

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],  // <-- add this
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements AfterViewInit {
  @ViewChild('servicesContainer', { static: true }) servicesContainer!: ElementRef;

  services = [
    { icon: '💻', title: 'Web Development', description: 'Building responsive and modern websites.' },
    { icon: '🎨', title: 'UI/UX Design', description: 'Designing beautiful interfaces and experiences.' },
    { icon: '⚡', title: 'Performance Optimization', description: 'Optimizing apps for speed and efficiency.' },
    { icon: '🔒', title: 'Security', description: 'Ensuring safe and secure web applications.' },
  ];

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, { threshold: 0.2 });

    const elements: NodeListOf<HTMLElement> = this.servicesContainer.nativeElement.querySelectorAll('.animate-up');
    elements.forEach((el: HTMLElement) => observer.observe(el));
  }
}
