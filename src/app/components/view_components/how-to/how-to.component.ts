import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-how-to',
  templateUrl: './how-to.component.html',
  styleUrls: ['./how-to.component.scss']
})
export class HowToComponent implements OnInit {

	public heroTitle = '<div class="top-line">NWFLT</div><div>Blobs Guide</div>';

  constructor() { }

  ngOnInit() {
  }

}
