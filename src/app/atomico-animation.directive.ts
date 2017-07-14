import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appAtomicoAnimation]',
})
export class AtomicoAnimationDirective {

  constructor(private el: ElementRef) { }
  @HostListener('mouseenter') onMouseEnter() {
    this.hover('increase');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hover('decrease');
  }

  hover(state: string) {
      this.el.nativeElement.className = state;
  }
}
