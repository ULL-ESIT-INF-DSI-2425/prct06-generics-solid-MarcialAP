/**
 * Interface Arithmeticable: interfaz generica que define los metodos "add, substract, multiply y divide"
 */
export interface Arithmeticable<T> {
    add(primer_valor : T, segundo_valor : T) : T;
    substract(primer_valor : T, segundo_valor : T) : T;
    multiply(primer_valor : T, segundo_valor : T) : T;
    divide(primer_valor : T, segundo_valor : T) : T;
}