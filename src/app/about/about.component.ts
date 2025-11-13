import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements AfterViewInit {

  @ViewChild('aboutContainer', { static: true }) aboutContainer!: ElementRef;

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target); // Stop observing after animation
          }
        });
      },
      { threshold: 0.9 }
    );

    // Select all elements to animate
    const elements: NodeListOf<HTMLElement> = this.aboutContainer.nativeElement.querySelectorAll(
      '.animate-left, .animate-right, .animate-up, .about-text p'
    );

    elements.forEach(el => observer.observe(el));
  }
}
