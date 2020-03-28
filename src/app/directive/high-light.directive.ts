import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[zhHighLight]'
})
export class HighLightDirective {

  constructor(
    private el: ElementRef
  ) { }
  @Input("zhHighLight")
  colorAndSize: any;
  @HostListener("mouseenter")
  onMouseEnter() {
    console.log(this.colorAndSize);
    this.el.nativeElement.style.backgroundColor = this.colorAndSize.color;
    this.el.nativeElement.style.fontSize = this.colorAndSize.size + "px";
  }
  @HostListener("mouseleave")
  onMouseLeave() {
    this.el.nativeElement.style.backgroundColor = null;
    this.el.nativeElement.style.fontSize = null;
  }
}
