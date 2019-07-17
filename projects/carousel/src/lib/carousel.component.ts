import {
  Component,
  ContentChild,
  Input,
  OnInit,
  TemplateRef,
  ViewChild,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'pnm-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, AfterViewInit {

  // inner rendering
  @ContentChild('carouselItem', { static: true }) carouselItemTemplate: TemplateRef<any>;
  @ViewChild('carousel', { static: true }) carousel;

  // inputs
  @Input() items: Array<any>;

  // is mouse down
  private isMouseDown = false;

  // drag start
  private startX: number;

  // carousel scroll left
  private scrollLeft: number;

  constructor() { }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const carouselChildren = this.carousel.nativeElement.children;
    for (const child of carouselChildren) {
      child.style['scroll-snap-align'] = 'center';
    }
  }

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
}
