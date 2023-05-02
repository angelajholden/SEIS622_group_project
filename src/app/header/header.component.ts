import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  currentlyActive = false;

  constructor(private cartService: CartService) {}

  itemCount() {
    return this.cartService.getItems().length;
  }

  updateActive() {
    this.currentlyActive = !this.currentlyActive;
  }
}
