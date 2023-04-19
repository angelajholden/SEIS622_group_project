import { Component } from '@angular/core';
import data from 'src/assets/products.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'bake-you-very-much';
  public products:any[] = data;
}
