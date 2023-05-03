import { Component, NgModule } from '@angular/core';
import { CartService } from '../cart.service';
import data from 'src/assets/products.json';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  selectedProduct: any;
  selectedId: string;
  searchText = '';
  public products: any[] = data;
  currentlyActive: boolean = false;

  constructor(private cartService: CartService, private router: Router) {}

  itemCount() {
    return this.cartService.getItems().length;
  }

  updateActive() {
    this.currentlyActive = !this.currentlyActive;
  }

  goToPage() {
    this.router.navigate(['product/', this.selectedId]);
  }

  changeProduct(e: any) {
    this.selectedId = e.target.value;
    console.log(e.target.value);
  }
}
