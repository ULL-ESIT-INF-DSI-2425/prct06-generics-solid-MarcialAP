import { Arithmeticable } from "./arithmeticable.js";
export class ComplexNumber implements Arithmeticable<ComplexNumber> {
    private _parte_real : number;
    private _parte_imaginaria : number;
    constructor(parte_real : number, parte_imaginaria : number) {
        this._parte_real = parte_real;
        this._parte_imaginaria = parte_imaginaria;
    }
    /**
     * Getter de la parte real de un número complejo
     * @returns la parte real
     */
    get parte_real() : number {
        return this._parte_real
    }
    /**
     * Setter de la parte real de un número complejo
     */
    set parte_real(cambio : number) {
        this._parte_real = cambio;
    }
    /**
     * Getter de la parte imaginaria de un número complejo
     * @returns la parte imaginaria
     */
    get parte_imaginaria() : number {
        return this._parte_imaginaria
    }
    /**
     * Setter de la parte imaginaria de un número complejo
     */
    set parte_imaginaria(cambio : number) {
        this._parte_imaginaria = cambio;
    }
    /**
     * 
     * @param segundo_valor número que se desea sumar al que llama al método
     * @returns la suma de ambos números imaginarios como número imaginario
     */
    add(segundo_valor: ComplexNumber) {
        return new ComplexNumber(this._parte_real + segundo_valor.parte_real, this._parte_imaginaria + segundo_valor.parte_imaginaria);
    }

    /**
     * 
     * @param segundo_valor número que se desea restar al número que llama al método
     * @returns la resta de ambos números imaginarios como número imaginario
     */
    substract(segundo_valor: ComplexNumber): ComplexNumber {
        return new ComplexNumber(this._parte_real - segundo_valor.parte_real, this._parte_imaginaria - segundo_valor.parte_imaginaria);
    }
    /**
     * 
     * @param segundo_valor número que se desea multiplicar al número que llama al método
     * @returns la multiplicación de ambos números imaginarios como número imaginario
     */
    multiply(segundo_valor: ComplexNumber): ComplexNumber {
        return new ComplexNumber(this._parte_real * segundo_valor.parte_real - this._parte_imaginaria * segundo_valor.parte_imaginaria, this._parte_real * segundo_valor.parte_imaginaria + this._parte_imaginaria * segundo_valor.parte_real);
    }

    /**
     * 
     * @param segundo_valor número que se comporta como divisor del número que llama al método
     * @returns la división del número que llama al método entre el número que se pasa como parámetro
     */
    divide(segundo_valor: ComplexNumber): ComplexNumber {
        const parte_divisoria : number  = (Math.pow(segundo_valor.parte_imaginaria, 2) + Math.pow(segundo_valor.parte_real, 2));
        const resultado_real : number = (((this._parte_real * segundo_valor.parte_real) + (this._parte_imaginaria * segundo_valor.parte_imaginaria)) / parte_divisoria);
        const resultado_imaginario : number = (((this._parte_imaginaria * segundo_valor.parte_real) - (this._parte_real * segundo_valor.parte_imaginaria)) / parte_divisoria);
        return new ComplexNumber(resultado_real, resultado_imaginario);
    }
}