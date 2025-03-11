"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pokemon = void 0;
class Pokemon {
    _nombre;
    _peso;
    _altura;
    _tipo;
    constructor(nombre, peso, altura, tipo) {
        this._nombre = nombre;
        this._peso = peso;
        this._altura = altura;
        this._tipo = tipo;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    get peso() {
        return this._peso;
    }
    set peso(peso) {
        this._peso = peso;
    }
    get altura() {
        return this._altura;
    }
    set altura(altura) {
        this._altura = altura;
    }
    get tipo() {
        return this._tipo;
    }
    set tipo(tipo) {
        this._tipo = tipo;
    }
}
exports.Pokemon = Pokemon;
