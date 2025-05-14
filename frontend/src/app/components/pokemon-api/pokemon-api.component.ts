import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { PokemonModel } from '../../models/pokemon-model';
import { MoveFilterPipe } from '../../pipes/move-filter.pipe';
import { FormsModule } from '@angular/forms';
import { TypeColorDirective } from '../../directives/type-color.directive';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-api',
  standalone: true,
  imports: [CommonModule, MoveFilterPipe, FormsModule, TypeColorDirective],
  templateUrl: './pokemon-api.component.html',
  styleUrl: './pokemon-api.component.css'
})
export class PokemonAPIComponent {
  pokemon: PokemonModel = new PokemonModel;
  pokemonId: number;
  filterText: string;
  pokemonSelected: boolean = false;

  constructor(private pokemonService: PokemonService) {

    this.pokemon = new PokemonModel();
    this.pokemon.id = 0;
    this.pokemon.name = 'name';
    this.pokemon.abilities = [{ability:{name:'none'}},{ability:{name:'none'}}];
    this.pokemon.types = [{type: {name: "none"}},{type: {name: "none"}}];
    this.pokemon.moves = [{move:{name:'none'}}];
    this.pokemon.sprites = {
      back_default: null,
      back_female: null,
      back_shiny: null,
      back_shiny_female: null,
      front_default: null,
      front_female: null,
      front_shiny: null,
      front_shiny_female: null};

   }

  ngOnInit(): void {
    this.filterText = '';
  }

  getPokemon(): void{
    this.pokemonService.getPokemonById(this.pokemonId).subscribe({
      next: (resp) => {
        resp.name = resp.name.charAt(0).toUpperCase() + resp.name.slice(1); 
        this.pokemon = resp;
      },
      error: () => this.pokemon = null
    });

    this.pokemon.name = this.pokemon.name.charAt(0).toUpperCase() + this.pokemon.name.slice(1);


    
    this.pokemonSelected = true;
  
  }

  
}
