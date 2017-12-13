import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure: true
})
export class SortPipe implements PipeTransform {
  transform(array: Array<string>, param: string): Array<string> {
    array.sort((a: any, b: any) => {
      if (a.param < b.param) {
        return -1;
      } else if (a.param > b.param) {
        return 1;
      } else {
        return 0;
      }
    });
    return array;
  }
}
