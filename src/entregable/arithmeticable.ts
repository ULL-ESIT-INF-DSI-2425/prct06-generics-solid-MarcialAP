/**
 * Interface Arithmeticable: interfaz generica que define los metodos "add, substract, multiply y divide"
 */
export interface Arithmeticable<T> {
    add(segundo_valor : T) : T;
    substract(segundo_valor : T) : T;
    multiply(segundo_valor : T) : T;
    divide(segundo_valor : T) : T;
}