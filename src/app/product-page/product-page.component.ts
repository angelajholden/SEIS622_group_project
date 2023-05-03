import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../iproduct.model';
import data from 'src/assets/products.json';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
})
export class ProductPageComponent implements OnInit {
  constructor(private route: ActivatedRoute, private cartService: CartService) {
    this.route.paramMap.subscribe({
      next: (params) => {
        this.id = params.get('id') || '';
      },
    });
  }

  public id: string;
  public counter: number = 1;
  public products: any[] = data;
  public currentProduct: IProduct;

  ngOnInit(): void {
    this.OnInit();
  }

  OnInit(): void {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id == this.id) {
        this.currentProduct = this.products[i];
        break;
      }
    }
  }

  addToCart(product: IProduct, quantity:number) {
    this.cartService.addToCart(product, quantity);
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
