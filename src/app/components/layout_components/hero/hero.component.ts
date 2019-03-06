import { Component, Input, OnInit } from '@angular/core';
import { EasingLogic } from 'ngx-page-scroll-core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

	@Input() bgClass: string;
	@Input() innerBgClass: string;

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

  constructor() { }

  ngOnInit() {
  }

}
