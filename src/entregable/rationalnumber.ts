import { Arithmeticable } from "./arithmeticable.js";
export class RationalNumber implements Arithmeticable<RationalNumber> {
    private _numerador : number;
    private _denominador : number;
    constructor(numerador : number, denominador : number) {
        this._numerador = numerador;
        this._denominador = denominador;
    }
    /**
     * Getter del valor del numerador del número racional
     * @returns el numerador
     */
    get numerador() : number {
        return this._numerador
    }
    /**
     * Setter del numerador del número racional
     */
    set numerador(cambio : number) {
        this._numerador = cambio;
    }

    /**
     * Getter del valor del denominador del número racional
     * @returns el denominador
     */
    get denominador() : number {
        return this._denominador
    }
    /**
     * Setter del numerador del número racional
     */
    set denominador(cambio : number) {
        this._denominador = cambio;
    }
    
    /**
     * 
     * @param segundo_numero número que se desea sumar al que llama al método
     * @returns la suma de ambos números racionales como número racional
     */
    add(segundo_numero: RationalNumber) {
        let nuevo_numerador : number = this._numerador * segundo_numero.denominador + this._denominador * segundo_numero.numerador;
        let nuevo_denominador : number = this._denominador * segundo_numero.denominador;
        let contador : number = 2;
        while (contador < nuevo_denominador && contador < nuevo_numerador) {
            if (((nuevo_denominador / contador) % 1 === 0) && (nuevo_numerador / contador) % 1 === 0) {
                nuevo_denominador /= contador;
                nuevo_numerador /= contador;
            } else {
                contador += 1;
            }
        }
        return new RationalNumber(nuevo_numerador, nuevo_denominador);
    }

    /**
     * 
     * @param segundo_numero número que se desea restar al número que llama al método
     * @returns la resta de ambos números racionales como número racional
     */
    substract(segundo_numero: RationalNumber): RationalNumber {
        let nuevo_numerador : number = this._numerador * segundo_numero.denominador - this._denominador * segundo_numero.numerador;
        let nuevo_denominador : number = this._denominador * segundo_numero.denominador;
        let contador : number = 2;
        while (contador < nuevo_denominador && contador < nuevo_numerador) {
            if (((nuevo_denominador / contador) % 1 === 0) && (nuevo_numerador / contador) % 1 === 0) {
                nuevo_denominador /= contador;
                nuevo_numerador /= contador;
            } else {
                contador += 1;
            }
        }
        return new RationalNumber(nuevo_numerador, nuevo_denominador);
    }
    /**
     * 
     * @param segundo_numero número que se desea multiplicar al número que llama al método
     * @returns la multiplicación de ambos números racionales como número racional
     */
    multiply(segundo_numero: RationalNumber): RationalNumber {
        let nuevo_numerador : number = this._numerador * segundo_numero.numerador;
        let nuevo_denominador : number = this._denominador * segundo_numero.denominador;
        let contador : number = 2;
        while (contador <= nuevo_denominador && contador <= nuevo_numerador) {
            if (((nuevo_denominador / contador) % 1 === 0) && (nuevo_numerador / contador) % 1 === 0) {
                nuevo_denominador /= contador;
                nuevo_numerador /= contador;
            } else {
                contador += 1;
            }
        }
        return new RationalNumber(nuevo_numerador, nuevo_denominador);
    }

    /**
     * 
     * @param segundo_numero número que se comporta como divisor del número que llama al método
     * @returns la división del número que llama al método entre el número que se pasa como parámetro
     */
    divide(segundo_numero: RationalNumber): RationalNumber {
        let nuevo_numerador : number = this._numerador * segundo_numero.denominador;
        let nuevo_denominador : number = this._denominador * segundo_numero.numerador;
        let contador : number = 2;
        while ((contador <= nuevo_denominador) && (contador <= nuevo_numerador)) {
            if (((nuevo_denominador / contador) % 1 === 0) && ((nuevo_numerador / contador) % 1 === 0)) {
                nuevo_denominador /= contador;
                nuevo_numerador /= contador;
            } else {
                contador += 1;
            }
        }
        return new RationalNumber(nuevo_numerador, nuevo_denominador);
    }
}