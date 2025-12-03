import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-head',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './head.component.html',
  styleUrl: './head.component.css'
})
export class HeadComponent {
   menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

}
