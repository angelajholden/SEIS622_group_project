import { Component, Input, EventEmitter } from '@angular/core';
import data from 'src/assets/products.json';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  public products: any[] = data;
  
  searchText:string = "";

  onSearchTextEntered(searchValue:string){
      this.searchText = searchValue;
      console.log(searchValue);
  }
}
