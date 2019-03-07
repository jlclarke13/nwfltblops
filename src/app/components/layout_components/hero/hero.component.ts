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

  scrollPos: number = 0;
  screenWidth: number = this.window.innerWidth;
  screenHeight: number;
  cssProperty: any = -1;
  headerParallax: boolean = true;



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
    this.setCssProperty();
  }

  @HostListener("window:resize", [])
  onWindowResize() {
    this.screenWidth = this.window.innerWidth;
    this.setCssProperty();
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    // was causing problems
    // let number = this.window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
    let number = this.window.pageYOffset || 0;

    this.scrollPos = number;
  }

  setCssProperty() {
    if (this.screenWidth > 600) {
      this.cssProperty = "top";
    } else {
      this.cssProperty = "marginTop";
    }
  }

  headerTransform() {
    let multiplier:number = 0.7;
    let topVal: number;
    if (this.scrollPos > 0) {
      topVal = (this.scrollPos * multiplier);
    } else {
      topVal = -1;
      this.headerParallax = false;
    }
    return topVal;
  }

  headerOpacity() {
    let multiplier:number = 0.00166;
    let opacVal:number;

    if (this.scrollPos > 0) {
      opacVal = 1 - (this.scrollPos * multiplier);

      if (opacVal > 0 && opacVal < 1) {
        return opacVal;
      } else if (opacVal >= 1) {
        return 1;
      }

      return 0;

    } else {
      this.headerParallax = false;
      return -1;
    }

  }

  parallaxHeader() {
    let top: number = this.headerTransform();
    let opac: number = this.headerOpacity();

    if (this.headerParallax !== false && this.cssProperty !== -1) {
      if (this.cssProperty === "top") {
        return {'top.px': top, opacity: opac}; 
      } else if (this.cssProperty === "marginTop") {
        return {'margin-top.px': top, opacity: opac}; 
      }
    }

    this.headerParallax = true;
    return {}

  }

  buttonOpacity() {
    
    let opac: number = this.headerOpacity();

    if (this.headerParallax !== false && this.cssProperty !== -1) {
      return {opacity: opac};
    }

    this.headerParallax = true;
    return {};

  }

}
