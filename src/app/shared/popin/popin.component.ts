import {Component, ElementRef, EventEmitter, OnChanges, OnInit, Output, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'sp-popin',
  templateUrl: './popin.component.html',
  styleUrls: ['./popin.component.scss']
})
export class PopinComponent implements OnInit {

  @ViewChild('popin') popin : ElementRef;
  @Output() exit = new EventEmitter<void>();
  constructor(private renderer2: Renderer2,
              private popinComplete: ElementRef) {

  }

  ngOnInit() {
    this.renderer2.listen(this.popin.nativeElement, 'click', e => {
      console.log(e)
      e.stopPropagation();
    });
    this.renderer2.listen(this.popinComplete.nativeElement, 'click', e => {
      console.log(e);
      this.exit.emit();
    });

    this.renderer2.listen(document, 'keydown.escape', e => {
      console.log('test', e)
        this.exit.emit();
    });

  }


}
