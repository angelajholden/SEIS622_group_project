import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../iproduct.model';
import data from 'src/assets/products.json';


@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
})

export class ProductPageComponent implements OnInit {
  
  constructor(public route: ActivatedRoute) {
    this.route.paramMap.subscribe({
    next: (params) => {
      this.id = params.get("id") || "";
    }
    })};
  
  public id:string;
  public counter:number = 1;
  public products:any[] = data;
  public currentProduct:IProduct;

  ngOnInit():void {
    this.OnInit();
  }

  OnInit():void {
    for(let i = 0; i < this.products.length; i++){
      if(this.products[i].id == this.id){
        this.currentProduct = this.products[i];
        break;
      }
    };
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
