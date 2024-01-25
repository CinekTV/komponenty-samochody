import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone:true,
  })
  export class HighlightDirective {
  
  constructor(private el: ElementRef) {console.log('kosnturktor');}
  
  @HostListener('mouseenter') onMouseEnter() {
  this.highlight('yellow');
  console.log('najechano');
  }
  
  @HostListener('mouseleave') onMouseLeave() {
  this.highlight('');
  console.log('drugi');
  }
  
  private highlight(color: string) {
  this.el.nativeElement.style.backgroundColor = color;
  console.log('trzeci');
  }
  }
  
  