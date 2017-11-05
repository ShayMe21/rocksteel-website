import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterGallery'
})

export class FilterGalleryPipe implements PipeTransform {

  transform(items: any[], criteria: string): any {
    if (criteria === 'all') { return items} else 
    return items.filter(item => {
      return item.category === criteria;
    })
  }

}
