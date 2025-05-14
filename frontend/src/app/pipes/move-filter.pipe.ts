import { Pipe, PipeTransform } from '@angular/core';
import { PokemonAbilities } from '../models/pokemon-abilities';

@Pipe({
  name: 'moveFilter',
  standalone: true
})
export class MoveFilterPipe implements PipeTransform {

  transform(value: PokemonAbilities[], searchText: string): PokemonAbilities[] {
    let matches = [];
    for (const m of value) {
      if (m.move.name.toLowerCase().includes(searchText.toLowerCase())) {
        matches.push(m);
      }
    }
    return matches;
  }

}
