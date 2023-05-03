import { Component } from '@angular/core';
import data from 'src/assets/products.json';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { SearchPipe } from '../search.pipe';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  selectedProduct: any;
  selectedId:string;
  searchText = "";
  public products: any[] = data;
  test = ["cat", "dog", "pig"];

  constructor(private router: Router) { }

  goToPage(){
    this.router.navigate(['product/', this.selectedId]);
    // [routerLink]="['/product', selectedProduct.id]"
  }

  changeProduct(e:any){
    this.selectedId = e.target.value;
    console.log(e.target.value);
  }

}
