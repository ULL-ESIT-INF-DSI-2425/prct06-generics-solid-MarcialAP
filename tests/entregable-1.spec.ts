import { describe, expect, test} from "vitest"
import { Coche } from "../src/entregable-1/coche"
import { Moto } from "../src/entregable-1/moto"

let mi_coche = new Coche("1234ABC", "opel", "corsa", 100, 100, 5);
let mi_coche2 = new Coche("1234ABC", "opel", "corsa", 100, 100, 5);
let mi_moto = new Moto("1234ABC", "honda", "zero", 100, 100, 120);

mi_coche2.matricula = "9876ZYX";
mi_coche2.marca = "fiat";
mi_coche2.modelo = "panda";
mi_coche2.cilindrada = 50;
mi_coche2.potencia = 20;
mi_coche2.numPuertas = 3;

describe("Pruebas de los getters de la clase Coche", () => {
  test("mi_coche.matricula devuelve = '1234ABC'", () => {
    expect(mi_coche.matricula).toBe("1234ABC");
  });

  test("mi_coche.marca devuelve = 'opel'", () => {
    expect(mi_coche.marca).toBe("opel");
  });

  test("mi_coche.modelo devuelve = 'corsa'", () => {
    expect(mi_coche.modelo).toBe("corsa");
  });

  test("mi_coche.cilindrada devuelve = 100", () => {
    expect(mi_coche.cilindrada).toBe(100);
  });

  test("mi_coche.potencia devuelve = 100", () => {
    expect(mi_coche.potencia).toBe(100);
  });
  
  test("mi_coche.numPuertas devuelve = 5", () => {
    expect(mi_coche.numPuertas).toBe(5);
  });

  test("mi_coche.getData() devuelve = '1234ABC opel corsa 100 100 5'", () => {
    expect(mi_coche.getData()).toBe("1234ABC opel corsa 100 100 5");
  });
});


describe("Pruebas de los setters de la clase Coche", () => {

    test("mi_coche2.matricula devuelve = '9876ZYX'", () => {
      expect(mi_coche2.matricula).toBe("9876ZYX");
    });
  
    test("mi_coche2.marca devuelve = 'fiat'", () => {
      expect(mi_coche2.marca).toBe("fiat");
    });
  
    test("mi_coche2.modelo devuelve = 'panda'", () => {
      expect(mi_coche2.modelo).toBe("panda");
    });
  
    test("mi_coche2.cilindrada devuelve = 50", () => {
      expect(mi_coche2.cilindrada).toBe(50);
    });
  
    test("mi_coche2.potencia devuelve = 20", () => {
      expect(mi_coche2.potencia).toBe(20);
    });
    
    test("mi_coche2.numPuertas devuelve = 3", () => {
      expect(mi_coche2.numPuertas).toBe(3);
    });
  
    test("mi_coche2.getData() devuelve = '9876ZYX fiat panda 50 20 3'", () => {
      expect(mi_coche2.getData()).toBe("9876ZYX fiat panda 50 20 3");
    });
  });



describe("pruebas de la clase Moto", () => {
    test("mi_moto.matricula devuelve = '1234ABC'", () => {
      expect(mi_moto.matricula).toBe("1234ABC");
    });
  
    test("mi_moto.marca devuelve = 'honda'", () => {
      expect(mi_moto.marca).toBe("honda");
    });
  
    test("mi_moto.modelo devuelve = 'zero'", () => {
      expect(mi_moto.modelo).toBe("zero");
    });
  
    test("mi_moto.cilindrada devuelve = 100", () => {
      expect(mi_moto.cilindrada).toBe(100);
    });
  
    test("mi_moto.potencia devuelve = 100", () => {
      expect(mi_moto.potencia).toBe(100);
    });
    
    test("mi_moto.centimetrosCubicos devuelve = 120", () => {
      expect(mi_moto.centimetrosCubicos).toBe(120);
    });
  
    test("mi_moto.getData() devuelve = '1234ABC honda zero 100 100 5'", () => {
      expect(mi_moto.getData()).toBe("1234ABC honda zero 100 100 120");
    });
  });