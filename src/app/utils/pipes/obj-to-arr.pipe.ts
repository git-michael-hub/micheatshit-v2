import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'objToArr'
})
export class ObjToArrPipe implements PipeTransform {

  transform(obj: any = {}): string[] {
    return Object.keys({...obj});
  }

}
