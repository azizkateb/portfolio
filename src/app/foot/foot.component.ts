import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-foot',
  templateUrl: './foot.component.html',
  styleUrls: ['./foot.component.css']
})
export class FootComponent implements OnInit {

  ngOnInit(): void {
    AOS.init({
      duration: 3000,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
    });
  }

}
