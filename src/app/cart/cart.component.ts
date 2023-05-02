import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  @Input() isActive: boolean;

  @Output() changeActiveEvent = new EventEmitter<boolean>();

  public counter: number = 1;

  constructor(private cartService: CartService) {}

  items = this.cartService.getItems();

  removeItem(index: number) {
    this.cartService.removeItem(index);
  }

  changeActive() {
    this.changeActiveEvent.emit();
  }

  increment() {
    this.counter++;
  }

  decrement() {
    if (this.counter >= 2) {
      this.counter--;
    }
  }
}
