import { PokemonAbilities } from "./pokemon-abilities";

//For accessing abilities
interface Ability{name: string;}
interface StartingAbility{ability: Ability;}

//For accessing pokemon types
interface Type{name: string;}
interface Types{type: Type;}



export class PokemonModel {
   
    id: number;
    name: string;
    sprites: {};
    abilities: Array<StartingAbility>;
    types: Array<Types>;
    moves: Array<PokemonAbilities>;
    
}
