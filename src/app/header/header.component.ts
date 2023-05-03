import { Component, NgModule } from '@angular/core';
import { CartService } from '../cart.service';
import data from 'src/assets/products.json';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  
  selectedProduct: any;
  selectedId:string;
  searchText = "";
  public products: any[] = data;
  test = ["cat", "dog", "pig"];
  currentlyActive: boolean = false;

  constructor(private cartService: CartService, private router: Router) {}

  itemCount() {
    return this.cartService.getItems().length;
  }

  updateActive() {
    this.currentlyActive = !this.currentlyActive;
  }

  goToPage(){
    this.router.navigate(['product/', this.selectedId]);
    // [routerLink]="['/product', selectedProduct.id]"
  }

  changeProduct(e:any){
    this.selectedId = e.target.value;
    console.log(e.target.value);
  }
}
