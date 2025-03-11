"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pokedex = void 0;
class Pokedex {
    _pokemons;
    constructor() {
        this._pokemons = [];
    }
    addPokemon(nuevo) {
        this._pokemons.push(nuevo);
    }
    checkTipo(tipo) {
        let resultado = [];
        this._pokemons.forEach(pokemon => {
            if (pokemon.tipo === tipo) {
                resultado.push(pokemon);
            }
        });
        return resultado.length === 0 ? undefined : resultado;
    }
}
exports.Pokedex = Pokedex;
