import { RationalNumber } from "./rationalnumber.js";
import { ComplexNumber } from "./complexnumber.js";

export class Adaptador extends ComplexNumber {
    constructor(private racional: RationalNumber) {
        super(racional.numerador/racional.denominador, 0);
    }
}