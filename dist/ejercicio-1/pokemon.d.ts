export declare class Pokemon {
    private _nombre;
    private _peso;
    private _altura;
    private _tipo;
    constructor(nombre: string, peso: number, altura: number, tipo: string);
    get nombre(): string;
    set nombre(nombre: string);
    get peso(): number;
    set peso(peso: number);
    get altura(): number;
    set altura(altura: number);
    get tipo(): string;
    set tipo(tipo: string);
}
