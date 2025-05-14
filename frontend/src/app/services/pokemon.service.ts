import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PokemonModel } from '../models/pokemon-model';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  getPokemonById(id:number): Observable<PokemonModel> {
    return this.http.get('https://pokeapi.co/api/v2/pokemon/' + id).pipe(
      map(resp => resp as PokemonModel)
    );
  }
}
