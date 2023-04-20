import { Component, Input } from '@angular/core';
import data from 'src/assets/products.json';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  // @Input() public product:any;
  public products: any[] = data;
}
