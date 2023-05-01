import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  currentlyActive = true;

  constructor(private cartService: CartService) {}

  itemCount() {
    return this.cartService.getItems().length;
  }
}
