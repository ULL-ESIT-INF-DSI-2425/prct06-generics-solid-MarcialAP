"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Moto = void 0;
const vehiculo_1 = require("./vehiculo");
class Moto extends vehiculo_1.Vehiculo {
    _centimetrosCubicos;
    constructor(matricula, marca, modelo, cilindrada, potencia, centimetrosCubicos) {
        super(matricula, marca, modelo, cilindrada, potencia);
        this._centimetrosCubicos = this._centimetrosCubicos;
    }
    set centimetrosCubicos(centimetrosCubicos) {
        this._centimetrosCubicos = centimetrosCubicos;
    }
    get centimetrosCubicos() {
        return this._centimetrosCubicos;
    }
    /**
     *
     * @returns Un string con la matricula, la marca, el modelo, la cilindrada, la potencia y los centimetros cúbicos de la moto en ese orden
     */
    getData() {
        return super.matricula + " " + super.marca + " " + super.modelo + " " + super.cilindrada + " " + super.potencia + " " + this._centimetrosCubicos;
    }
}
exports.Moto = Moto;
