import { Component } from '@angular/core';

@Component({
  selector: 'app-head',
  imports: [],
  templateUrl: './head.component.html',
  styleUrl: './head.component.css'
})
export class HeadComponent {
   menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

}
