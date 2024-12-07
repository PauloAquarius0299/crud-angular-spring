import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category',
  standalone: true
})
export class CategoryPipe implements PipeTransform {

  transform(value: string): string {
    switch(value){
      case 'ação': return 'sports_martial_arts';
      case 'fantasia': return 'auto_awesome';
      case 'suspense': return 'visibility';
      case 'ficção científica': return 'science';
      case 'aventura': return 'hiking';
      case 'super-heróis': return 'bolt'
    }
    return 'computer';
  }

}
