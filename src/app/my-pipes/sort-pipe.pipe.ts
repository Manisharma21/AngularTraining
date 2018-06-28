import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortNumber'
})
export class SortPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {

    if(args === 'asc'){
      return value.sort(sortNumber)
    } else if(args === 'dsc'){
      return value.sort(sortNumber).reverse();
    }

    function sortNumber(a, b){
      return a-b
    }
  }

}
