import { Pokemon } from "./pokemon";
export declare class Pokedex {
    private _pokemons;
    constructor();
    addPokemon(nuevo: Pokemon): void;
    checkTipo(tipo: string): Pokemon[] | undefined;
}
