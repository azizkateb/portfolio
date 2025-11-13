import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-vedio',
  templateUrl: './vedio.component.html',
  styleUrls: ['./vedio.component.css']
})
export class VedioComponent implements AfterViewInit {
  @ViewChild('bgVideo') bgVideo!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit() {
    const videoEl = this.bgVideo.nativeElement;

    // Some browsers block autoplay until play() is called after user gesture
    const tryPlay = () => {
      const playPromise = videoEl.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => console.log('Video playing'))
          .catch(err => {
            console.log('Autoplay prevented, retrying...', err);
            // Retry after slight delay
            setTimeout(tryPlay, 500);
          });
      }
    };

    tryPlay();
  }
}
