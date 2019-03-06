import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { FitsService } from '../../../services/fits/fits.service';

@Component({
  selector: 'app-fits',
  templateUrl: './fits.component.html',
  styleUrls: ['./fits.component.scss'],
  animations: [
  	trigger('copyAnim', [
  		state('uncopied', style({
  			opacity: 0
  		})),
  		state('copied', style({
  			opacity: 1
  		})),
  		transition('uncopied => copied', [
  			animate('0ms')
  		]),
  		transition('copied => uncopied', [
  			animate('2600ms')
  		])
  	])
  ]
})
export class FitsComponent implements OnInit {

	public heroTitle = '<div class="top-line">NWFLT</div><div class="bottom-line">Blops Fits</div>';

	public fits = [];
	public fitsErrorMsg;

	state: string = 'uncopied';

  constructor(private _fitsService: FitsService) { }

  ngOnInit() {
  	this._fitsService.getFits()
  			.subscribe(data => this.fits = data,
  								 error => this.fitsErrorMsg = error);
  }

  copyFit(cidx: number, sidx: number, val: string){
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);

    this.runCopiedAnim(cidx, sidx);
  }

  runCopiedAnim(cidx: number, sidx: number) {
  	this.fits[cidx].ships[sidx].state = 'copied';
  	setTimeout(() => {
  		this.fits[cidx].ships[sidx].state = 'uncopied';
  	}, 1600);
  }

}
