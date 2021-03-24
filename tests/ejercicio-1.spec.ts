import 'mocha';
import {Fighter} from "../src/Ejercicio_1/Fighter";
import {DC} from "../src/Ejercicio_1/DC";
import {Marvel} from "../src/Ejercicio_1/Marvel";
import {Pokemon} from "../src/Ejercicio_1/Pokemon";
import { expect } from 'chai';

let DC1: DC = new DC("BATMAN", 1.9, 90, 110, 100);
let AV1: Marvel = new Marvel("IRONMAN", 1.8, 110, 150, 200);
let PO1: Pokemon = new Pokemon("PIKACHU", 1, 70, 80, 90, "Electrico");

console.log(" *********** Ejercicio 1 *********** ");

describe('Creando objetos', () => {


  it("Creamos DC", () => {
    expect(DC1 instanceof DC).to.eql(true);
  });

  it("Creamos Marvel", () => {
    expect(AV1 instanceof Marvel).to.eql(true);
  });

  it("Creamos POKEMON", () => {
    expect(PO1 instanceof Pokemon).to.eql(true);
  });
})
  //********************************************************* */

describe('Nombre de Objetos', () => {
  it("Nombre DC es BATMAN", () => {
    expect(DC1.getName()).to.eql("BATMAN");
  });

  it("Nombre Marvel es IRONMAN", () => {
    expect(AV1.getName()).to.eql("IRONMAN");
  });

  it("Nombre POKEMON es PIKACHU", () => {
    expect(PO1.getName()).to.eql("PIKACHU");
  });
})

describe('Ataque de Objetos', () => {
  it("Ataque BATMAN es 90", () => {
    expect(DC1.getAtt()).to.eql(90);
  });

  it("Ataque IRONMAN es 110", () => {
    expect(AV1.getAtt()).to.eql(110);
  });

  it("Ataque BATMAN es 70", () => {
    expect(PO1.getAtt()).to.eql(70);
  });
})
