import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myUperCase'
})
export class MyUperCasePipe implements PipeTransform {

  transform(value: string, args?: any): any {
    if (value == undefined) {
      value = "";
    }
    return value.toUpperCase() + "这是我自己定义的管道";
  }

}
