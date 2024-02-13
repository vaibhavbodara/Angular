import { style } from '@angular/animations';
import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]',
  // standalone: true
})
export class AppHoverDirective {

  constructor(private element:ElementRef,private renderer:Renderer2) { 

  }

  @HostBinding('style.backgroundColor') backgroundColor:string='#28282B';
  @HostBinding('style.border') border:string='none';
  @HostBinding('style.textColor') textColor:string='white';

  @HostListener('mouseenter') OnMouseEnter(){
    this.backgroundColor='white';
    this.border='#28282B 3px solid';
    this.textColor='#28282B';
  }

  @HostListener('mouseout') OnMouseOut(){
    this.backgroundColor='#28282B';
    this.border='none';
    this.textColor='white'
  }
}
