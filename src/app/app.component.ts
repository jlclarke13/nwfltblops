import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'NWFLT Blops';

	mainMenu: any[] = [
		{ name: 'home', display: 'Home', location: '/home' },
		{ name: 'fits', display: 'Fits', location: '/fits' },
		{ name: 'howto', display: 'How To', location: '/howto' }
	];

}
