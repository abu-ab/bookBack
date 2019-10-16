import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'borrowState',

})
export class BorrowStatePipe implements PipeTransform {

  transform(value: any, state: string): any {

    if (state) {
      return value.filter((res: any) => {
        return res.State == state;
      })

    }
    return value;
  }

}
