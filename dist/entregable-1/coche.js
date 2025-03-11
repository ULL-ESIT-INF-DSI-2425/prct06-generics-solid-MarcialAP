"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Coche = void 0;
const vehiculo_1 = require("./vehiculo");
class Coche extends vehiculo_1.Vehiculo {
    _numPuertas;
    constructor(matricula, marca, modelo, cilindrada, potencia, numPuertas) {
        super(matricula, marca, modelo, cilindrada, potencia);
        this._numPuertas = numPuertas;
    }
    set numPuertas(numPuertas) {
        this._numPuertas = numPuertas;
    }
    get numPuertas() {
        return this._numPuertas;
    }
    /**
     *
     * @returns Un string con la matricula, la marca, el modelo, la cilindrada, la potencia y el número de puertas del coche en ese orden
     */
    getData() {
        return "hola";
        // return super.matricula/** + " " + super.marca + " " + super.modelo + " " + super.cilindrada.toFixed(0) + " " + super.potencia.toFixed(0) + " " + this._numPuertas.toFixed(0) */;
    }
}
exports.Coche = Coche;
