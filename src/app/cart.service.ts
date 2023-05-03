import { IProduct } from './iproduct.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: IProduct[] = [];
  quantity: number[] = [];
  total:number = 0;

  constructor() {}

  addToCart(product: IProduct, num:number) {
    this.items.push(product);
    this.quantity.push(num);
    this.total += product.cost[0]*num;
  }
  getTotal(){
    this.total = 0;
    for(let i = 0; i < this.items.length; i++)
    {
      this.total += this.items[i].cost[0]*this.quantity[i];
    }
    return this.total;
  }

  getItems() {
    return this.items;
  }

  getQuantity(){
    return this.quantity;
  }

  removeItem(index: number) {
    this.items.splice(index, 1);
    this.quantity.splice(index,1);
  }
}
