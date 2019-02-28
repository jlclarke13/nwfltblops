import { Component, OnInit, Input, HostListener } from '@angular/core';

@Component({
  selector: 'app-quick-def',
  templateUrl: './quick-def.component.html',
  styleUrls: ['./quick-def.component.scss']
})
export class QuickDefComponent implements OnInit {

	@Input() defModal: string;
	@HostListener('document:keydown.escape', ['$event']) onKeydownHandler(event: KeyboardEvent) {
	  this.destroyModal();
	}

	modalVisible = false;

  constructor() { }

  ngOnInit() {
  }

  showModal() {
  	this.modalVisible = true;
  }

  destroyModal() {
  	this.modalVisible = false;
  }

}
