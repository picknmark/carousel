# Carousel

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.3.

## Demo
[Demo](https://picknmark.github.io/carousel/index.html)

## Installation
```bash
npm i --save @hmurrar/carousel
```

## Usage
```typescript
// app.module.ts
import { CarouselModule } from '@hm/carousel';

@NgModule({
  imports: [CarouselModule]
})
export class AppModule {}
```
```typescript
// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  
  onCarouselScrollEnd(event: boolean) {
      console.log(event);
  }
}
```
```typescript
// app.component.html
<pnm-carousel [items]="cards"
                (scrollEnd)="onCarouselScrollEnd($event)">
    <ng-template #carouselItem
                 let-item>
      <div class="Carousel__Item card">
        {{item}}
      </div>
    </ng-template>
</pnm-carousel>
```

```css
.card {
  position: relative;
  display: block;
  width: 210px;
  min-width: 210px;
  height: 250px;
  margin-right: 18px;
  border-radius: 10px;
  padding: 5px;
  transition: all .250s;
  box-shadow: 0 8px 17px 0 rgba(0, 0, 0, .2), 0 6px 20px 0 rgba(0, 0, 0, .15);
  cursor: pointer;
}

```

## Inputs
```typescript
items: Array<any>;
scrollEndThreshold: number = .75;
```

## Outputs
```typescript
scrollEnd: EventEmitter<boolean>;
```

## Running unit tests

Run `ng test carousel` to execute the unit tests via [Karma](https://karma-runner.github.io).
