import {
  Component,
  ContentChild,
  Input,
  OnInit,
  TemplateRef,
  ViewChild
} from '@angular/core';
import 'scroll-behavior-polyfill';

import { CarouselSpeed } from './carousel-speed.enum';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'pnm-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  // inner rendering
  @ContentChild('carouselItem', { static: true }) carouselItemTemplate: TemplateRef<any>;
  @ViewChild('carousel', { static: true }) carousel;

  // inputs
  @Input() items: Array<any>;
  @Input() scrollSpeed: CarouselSpeed = CarouselSpeed.default;

  // save setInterval value
  private scrollTimeout;

  // is mouse down
  private isMouseDown = false;

  // drag start
  private startX: number;

  // carousel scroll left
  private scrollLeft: number;

  // debounce time before centering item
  private debounceTime = 100;

  constructor() { }

  ngOnInit(): void {}

  /**
   *
   * gets the element in the middle of the carousel
   * then it scrollIntoView and center it
   */
  private _handleScroll() {
    const carousel = this.carousel.nativeElement;
    const x = carousel.clientWidth / 2;
    const y = carousel.clientHeight / 2;
    const element = document.elementFromPoint(x, y);

    // scroll into element smoothly and center it
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'center'
    });
  }

  // handle carousel scroll
  onScroll() {

    // clear interval
    clearTimeout(this.scrollTimeout);

    // save interval
    this.scrollTimeout = setTimeout(() => {
      this._handleScroll();
    }, this.debounceTime);
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
    const walk = (x - this.startX) * this.scrollSpeed;
    carousel.scrollLeft = this.scrollLeft - walk;
  }
}
