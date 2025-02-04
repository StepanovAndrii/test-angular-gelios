import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import gsap from 'gsap';

@Component({
  selector: 'app-preloader',
  standalone: true,
  templateUrl: './preloader.component.html',
  styleUrls: ['./preloader.component.scss']
})
export class PreloaderComponent implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const svg = document.getElementById("svg");
      const tl = gsap.timeline();
      const curve = "M0 502S175 200 500 200s500 302 500 302V0H0Z";
      const flat = "M0 80S175 79 500 79s500 1 500 1V0H0Z";

      tl.from(".loader-wrap-heading h1", {
        delay: 0.2,
        duration: 0.5,
        y: 200
      }).to(".loader-wrap-heading h1", {
        delay: 0.7,
        duration: 0.5,
        y: -200
      });
      tl.to(svg, {
        attr: { d: curve },
        ease: "power4.easeOut",
        duration: 0.5
      }, "-=0.2").to(svg, {
        delay: 0.1,
        attr: { d: flat },
        ease: "power4.easeIn",
        duration: 0.2
      });
      tl.to(".loader-wrap", {
        y: -1500
      });
      tl.to(".loader-wrap", {
        zIndex: -10,
        display: "none"
      });
    }
  }
}
