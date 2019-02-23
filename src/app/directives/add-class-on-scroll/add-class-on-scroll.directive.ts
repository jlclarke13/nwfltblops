import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[AddClassOnScroll]'
})
export class AddClassOnScrollDirective {
	private el: HTMLElement;

	@Input('AddClassOnScroll') className: any;
	@Input('addClassOffset') offset: number = 20;

	@HostBinding('class.active') addClass: boolean;

  constructor() { }

  ngOnInit() {
    if (typeof window !== undefined) {
      window.addEventListener('scroll', () => this._checkScroll());
    }

  }

  ngOnDestroy() {
    if (typeof window !== undefined) {
      window.removeEventListener('scroll', () => this._checkScroll());
    }
  }

  private _checkScroll() {
    if (typeof window !== undefined) {
      this.addClass = (window.pageYOffset > this.offset);
    }
  }
}
