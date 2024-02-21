import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective{
  @HostBinding("class.open") isOpen = false;
  @HostListener("click") toggleOpen(){
    this.isOpen = !this.isOpen;
    // if(this.isOpen){
    //   this.renderer.addClass(this.elementRef.nativeElement,"open")
    // }else{
    //   this.renderer.removeClass(this.elementRef.nativeElement,"open")
    // }
  }

  constructor(private elementRef:ElementRef,private renderer:Renderer2) { }

  // ngOnInit(): void {
      
  // }

}
