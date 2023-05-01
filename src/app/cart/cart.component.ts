import { Component, Input } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  @Input() isActive = false;

  // public isActive = false;

  items = this.cartService.getItems();

  removeItem(index: number) {
    this.cartService.removeItem(index);
  }

  constructor(private cartService: CartService) {}

  public checkActive() {
    this.isActive = !this.isActive;
  }
}
