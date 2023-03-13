import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bypassStringIndex'
})
export class BypassStringIndexPipe implements PipeTransform {

  transform(obj: {}, item: string): any {
    console.log(obj)
    console.log(item)
    return (obj as any)[item];
  }

}
