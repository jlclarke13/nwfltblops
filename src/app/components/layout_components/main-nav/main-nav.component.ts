import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {

	@Input() menuItems: any[];

	public showNav: boolean = false;

  public includeAnim: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  openNav() {
  	this.showNav = !this.showNav;
  }

  navTo() {
    this.showNav = false;
  }

  addAnim() {
    console.log("words");
    if (this.includeAnim === false) {
      this.includeAnim = true;
    }
  }

}
