import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {

  ngOnInit(): void {
    AOS.init({
      duration: 3000, // animation duration in ms
      easing: 'ease-in-out',
      once: true, // animate only once when scrolling
      mirror: false, // whether elements should animate out while scrolling past them
    });
  }
}
