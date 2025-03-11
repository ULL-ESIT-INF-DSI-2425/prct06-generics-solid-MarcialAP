import { Vehiculo } from "./vehiculo";
export declare class Moto extends Vehiculo {
    private _centimetrosCubicos;
    constructor(matricula: string, marca: string, modelo: string, cilindrada: number, potencia: number, centimetrosCubicos: number);
    set centimetrosCubicos(centimetrosCubicos: number);
    get centimetrosCubicos(): number;
    /**
     *
     * @returns Un string con la matricula, la marca, el modelo, la cilindrada, la potencia y los centimetros cúbicos de la moto en ese orden
     */
    getData(): string;
}
