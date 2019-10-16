import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(value: any, bookName: string): any {

    if (bookName) {
      return value.filter(e => {

        return e.Name.indexOf(bookName) >= 0
      })
    }
    return value;
  }

}
