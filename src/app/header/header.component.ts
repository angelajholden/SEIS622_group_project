import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import data from 'src/assets/products.json';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  
})
export class HeaderComponent {
  public products: any[] = data;
  currentlyActive = false;

  constructor(private cartService: CartService) {}

  itemCount() {
    return this.cartService.getItems().length;
  }

  updateActive() {
    this.currentlyActive = !this.currentlyActive;
  }
}
