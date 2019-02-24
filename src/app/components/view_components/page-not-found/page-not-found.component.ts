import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {

	public heroTitle = '<div class="top-line">Oops!</div><div class="bottom-line">Nothing here!</div>';
	
  constructor() { }

  ngOnInit() {
  }

}
