import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
@Injectable({ providedIn: 'root' })
export class SearchPipe implements PipeTransform {

  transform(list?: any[], query?: string): any[] {
    if (!list) return [];
    if (!query?.trim()) return list;

    const lowerQuery = query.toLowerCase();

    return list.filter(item =>
      item.name.toLowerCase().includes(lowerQuery)
    );
  }

}
