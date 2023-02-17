import { Pipe, PipeTransform } from '@angular/core';
import { Content } from './helper-files/content-interface';

@Pipe({
  name: 'contentTypeFilter'
})
export class ContentTypeFilterPipe implements PipeTransform {

  transform(cards: Content[], typeFilter?: string): Content[] {
    if(!typeFilter){
      return cards.filter(card => !card.type);
    }
    return cards.filter(card => card.type === typeFilter);
  }

}
