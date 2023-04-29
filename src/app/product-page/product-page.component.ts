import { Component } from '@angular/core';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
})
export class ProductPageComponent {
  constructor() {}

  counter = 1;

  increment() {
    this.counter++;
  }

  decrement() {
    if (this.counter >= 2) {
      this.counter--;
    }
  }
}
