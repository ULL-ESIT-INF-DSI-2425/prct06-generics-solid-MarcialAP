export declare abstract class Vehiculo {
    private _matricula;
    private _marca;
    private _modelo;
    private _cilindrada;
    private _potencia;
    constructor(matricula: string, marca: string, modelo: string, cilindrada: number, potencia: number);
    set matricula(matricula: string);
    get matricula(): string;
    set marca(marca: string);
    get marca(): string;
    set modelo(modelo: string);
    get modelo(): string;
    set cilindrada(cilindrada: number);
    get cilindrada(): number;
    set potencia(potencia: number);
    get potencia(): number;
    abstract getData(): string;
}
