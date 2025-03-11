import { Vehiculo } from "./vehiculo";
export declare class Coche extends Vehiculo {
    private _numPuertas;
    constructor(matricula: string, marca: string, modelo: string, cilindrada: number, potencia: number, numPuertas: number);
    set numPuertas(numPuertas: number);
    get numPuertas(): number;
    /**
     *
     * @returns Un string con la matricula, la marca, el modelo, la cilindrada, la potencia y el número de puertas del coche en ese orden
     */
    getData(): string;
}
