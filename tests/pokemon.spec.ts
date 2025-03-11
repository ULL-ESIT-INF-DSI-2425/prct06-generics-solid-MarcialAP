import { describe, expect, test} from "vitest"
import { Pokemon } from "../src/ejercicio-1/pokemon.ts"
import { Pokedex } from "../src/ejercicio-1/pokedex.ts"

const pikachu = new Pokemon("Pikachu", 50, 50, "electrico");
let mi_pokedex = new Pokedex;
mi_pokedex.addPokemon(pikachu);

describe("pruebas de la creacion de Pikachu: ", () => {
  test("El nombre debe ser Pikachu: ", () => {
    expect(pikachu.nombre).toBe("Pikachu");
  });

  test("El peso debe ser 50: ", () => {
    expect(pikachu.peso).toBe(50);
  });

  test("La altura debe ser 50: ", () => {
    expect(pikachu.altura).toBe(50);
  });

  test("El tipo debe ser electrico: ", () => {
    expect(pikachu.tipo).toBe("electrico");
  });
});

describe("pruebas de la pokedex: ", () => {
  test("El pokemon que encuentra debe ser pikachu: ", () => {
    expect(mi_pokedex.checkTipo("electrico")).toStrictEqual([pikachu]);
  });

  test("El resultado debe ser undefined ya que no hay pokemons tipo hierba: ", () => {
    expect(mi_pokedex.checkTipo("hierba")).toBe(undefined);
  });

});