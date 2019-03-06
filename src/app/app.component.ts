import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'NWFLT Blops';

	mainMenu: any[] = [
		{ name: 'home', display: 'Home', location: '/home' },
		{ name: 'fits', display: 'Fits', location: '/fits' },
		{ name: 'howto', display: 'How To', location: '/howto' }
	];

	isPopState = false;

  constructor() { }

  ngOnInit() { }

}
