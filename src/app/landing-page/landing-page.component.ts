import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadComponent } from '../head/head.component';
import { VedioComponent } from '../vedio/vedio.component';
import { ServicesComponent } from '../services/services.component';
import { AboutComponent } from '../about/about.component';
import { ProjectsComponent } from '../projects/projects.component';
import { SocialComponent } from '../social/social.component';
import { FootComponent } from '../foot/foot.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    CommonModule,
    HeadComponent,
    VedioComponent,
    ServicesComponent,
    AboutComponent,
    ProjectsComponent,
    SocialComponent,
    FootComponent
  ],
  template: `
    <div class="parent">
      <div class="head"><app-head></app-head></div>
      <div class="vedio"><app-vedio></app-vedio></div>
      <div class="Services"><app-services></app-services></div>
      <div class="About"><app-about></app-about></div>
      <div class="Project"><app-projects></app-projects></div>
      <div class="social"><app-social></app-social></div>
      <div class="foot"><app-foot></app-foot></div>
    </div>
  `
})
export class LandingPageComponent {}
