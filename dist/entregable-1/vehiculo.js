"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehiculo = void 0;
class Vehiculo {
    _matricula;
    _marca;
    _modelo;
    _cilindrada;
    _potencia;
    constructor(matricula, marca, modelo, cilindrada, potencia) {
        this._matricula = matricula;
        this._marca = marca;
        this._modelo = modelo;
        this._cilindrada = cilindrada;
        this._potencia = potencia;
    }
    set matricula(matricula) {
        this._matricula = matricula;
    }
    get matricula() {
        return this._matricula;
    }
    set marca(marca) {
        this._marca = marca;
    }
    get marca() {
        return this._marca;
    }
    set modelo(modelo) {
        this._modelo = modelo;
    }
    get modelo() {
        return this._modelo;
    }
    set cilindrada(cilindrada) {
        this._cilindrada = cilindrada;
    }
    get cilindrada() {
        return this._cilindrada;
    }
    set potencia(potencia) {
        this._potencia = potencia;
    }
    get potencia() {
        return this._potencia;
    }
}
exports.Vehiculo = Vehiculo;
