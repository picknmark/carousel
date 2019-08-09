import {
  Component,
  ContentChild,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'pnm-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CarouselComponent implements OnInit {

  // inner rendering
  @ContentChild('carouselItem', { static: true }) carouselItemTemplate: TemplateRef<any>;
  @ViewChild('carousel', { static: true }) carousel;

  // outputs
  @Output() scrollEnd: EventEmitter<boolean> = new EventEmitter<boolean>();

  // inputs
  @Input() items: Array<any>;
  @Input() scrollEndThreshold: number = 0.75;

  // is mouse down
  private isMouseDown = false;

  // drag start
  private startX: number;

  // carousel scroll left
  private scrollLeft: number;

  constructor() { }

  ngOnInit(): void {}

  /**
   * handles mouse down event
   * @param event: MouseEvent
   */
  onMouseDown(event: MouseEvent) {
    const carousel = this.carousel.nativeElement;
    this.isMouseDown = true;
    this.startX = event.pageX - carousel.offsetLeft;
    this.scrollLeft = carousel.scrollLeft;
  }

  /**
   * handles mouse up event
   */
  onMouseUp() {
    this.isMouseDown = false;
  }

  /**
   * handle mouse move
   * @param event: MouseEvent
   */
  onMouseMove(event: MouseEvent) {

    // if mouse is now clicked while moving
    if (!this.isMouseDown)  {

      // exit
      return;
    }
    const carousel = this.carousel.nativeElement;
    event.preventDefault();
    const x = event.pageX - carousel.offsetLeft;
    const walk = (x - this.startX) * 0.75;
    carousel.scrollLeft = this.scrollLeft - walk;
  }

  /**
   * emit true once the scroll of
   * the carousel reaches 70% of its whole width
   */
  onScroll() {
    const scrollLeft = this.carousel.nativeElement.scrollLeft;
    const scrollWidth = this.carousel.nativeElement.scrollWidth;
    if (scrollLeft >= (scrollWidth - (scrollWidth * this.scrollEndThreshold))) {
      this.scrollEnd.emit(true);
    }
  }
}
