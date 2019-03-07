import { Component, Input, OnInit, HostListener, Inject } from '@angular/core';
import { EasingLogic } from 'ngx-page-scroll-core';
import { WINDOW } from '../../../services/window/window.service';
// was causing problems
// import { DOCUMENT } from '@Angular/platform-browser';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

	@Input() bgClass: string;
	@Input() innerBgClass: string;

  public scrollPos: number = 0;

	public myEasing: EasingLogic = (t: number, b: number, c: number, d: number): number => {
    // easeInOutExpo easing
    if (t === 0) {
      return b;
    }
    if (t === d) {
      return b + c;
    }
    if ((t /= d / 2) < 1) {
      //return c / 2 * Math.pow(2, 10 * (t - 1)) + b; // original
      return c / 2 * Math.pow(2, 7 * (t - 1)) + b;
    }

    //return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b; // original
    return c / 2 * (-Math.pow(2, -7 * --t) + 2) + b;
  }

  constructor(
    // was causing problems
    // @Inject(DOCUMENT) private document: Document,
    @Inject(WINDOW) private window: Window
  ) { }

  ngOnInit() {
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    // was causing problems
    // let number = this.window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
    let number = this.window.pageYOffset || 0;

    this.scrollPos = number;
  }

  headerTransform() {
    let multiplier:number = 1.1;
    let topVal: number;
    if (this.scrollPos > 0) {
      topVal = (this.scrollPos * multiplier) + 140;
    } else {
      topVal = 140;
    }
    return topVal;
  }

  headerOpacity() {
    let multiplier:number = 0.005;
    let opacVal:number;

    if (this.scrollPos > 0) {
      opacVal = 1 - (this.scrollPos * multiplier);
    } else {
      opacVal = 1;
    }

    if (opacVal > 0 && opacVal < 1) {
      return opacVal;
    } else if (opacVal >= 1) {
      return 1;
    }

    return 0;

  }

  parallaxHeader() {
    let mt: number = this.headerTransform();
    let opac: number = this.headerOpacity();

    return {'margin-top.px': mt, opacity: opac};

  }

  buttonOpacity() {
    
    let opac: number = this.headerOpacity();

    return {opacity: opac};

  }

}
