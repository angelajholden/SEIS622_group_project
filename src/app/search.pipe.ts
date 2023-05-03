import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    // if (!searchText) {
    //   return items;
    // }
    searchText = searchText.toLowerCase();

    let returnText = Array.prototype.filter.call(items,(item) => Array.prototype.includes.call(item,searchText));
    //items.filter(item => item.productName.includes(searchText));
    console.log(returnText);
    return returnText;
    // return items.filter(it => {
    //   return it.includes(searchText);
    // });
  }

}
