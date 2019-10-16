import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bookListClassify'
})
export class BookListClassifyPipe implements PipeTransform {

  transform(value: any, publishIndex: string = '0', categoryIndex: string = '0', bookName: string = ''): any {

    let tempArray = value;

    if (publishIndex != '0') {
      tempArray = tempArray.filter((item: any) => {
        return item.Book.Publisher.Id == publishIndex;
      });
    }
    if (categoryIndex != '0') {
      tempArray = tempArray.filter((item: any) => {
        return item.Book.Category.Id == categoryIndex;
      })
    }
    if (bookName != '') {

      tempArray = tempArray.filter((item: any) => {
        return item.Book.Name.indexOf(bookName) >= 0
      })
    }

    return tempArray;
  }

}
