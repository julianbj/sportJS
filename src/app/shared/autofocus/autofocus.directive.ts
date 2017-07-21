import {AfterViewInit, Directive, ElementRef, OnInit} from '@angular/core';

@Directive({
  selector: '[spAutofocus]'
})
export class AutofocusDirective implements AfterViewInit{

  constructor(private e: ElementRef) {
    console.log('dans directive');

  }
  ngAfterViewInit(){
    if(this.e.nativeElement instanceof HTMLInputElement) {
      this.e.nativeElement.focus();
    }
  }
}
