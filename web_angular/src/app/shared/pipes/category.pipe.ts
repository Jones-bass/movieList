import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'category',
    standalone: true
})
export class CategoryPipe implements PipeTransform {

  transform(value: string): string {
    switch(value) {
      case 'Ação': return 'local_fire_department';
      case 'Terror': return 'dark_mode';
      case 'Romance': return 'favorite';
      case 'Ficção': return 'rocket';
      case 'Infantil': return 'child_care';
      case 'Aventura': return 'explore';

    }
    return 'code';
  }

}
