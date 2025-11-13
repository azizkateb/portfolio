import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeadComponent } from "./head/head.component";
import { VedioComponent } from "./vedio/vedio.component";
import { ServicesComponent } from "./services/services.component";
import { AboutComponent } from "./about/about.component";
import { ProjectsComponent } from "./projects/projects.component";
import { SocialComponent } from "./social/social.component";
import { FootComponent } from "./foot/foot.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeadComponent, VedioComponent, ServicesComponent, AboutComponent, ProjectsComponent, SocialComponent, FootComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular';
}
