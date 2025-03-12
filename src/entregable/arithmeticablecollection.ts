import { Arithmeticable } from "./arithmeticable";

/**
 * class ArithmeticableCollection: Clase generica cuyo parametro está restringido a la forma definida por la interfaz Arithmeticable
 */
export class ArithmeticableCollection<T extends Arithmeticable<T>> {
    constructor(protected coleccion: T[]) {
    }
    /**
     * 
     * @param elemento elemento que se desea añadir a la colección
     */
    addArithmeticable(elemento : T) : void {
        this.coleccion.push(elemento);
    }
    /**
     * 
     * @param indice indice de la colección al que se quiere acceder
     * @returns devuelve el elemento que se encuentra en la posicion "indice"
     */
    getArithmeticable(indice : number) : T {
        return this.coleccion[indice];
    }
    /**
     * 
     * @returns devuelve el número de elementos que hay en la colección
     */
    getNumberOfArithmeticables() : number {
        return this.coleccion.length;
    }
}