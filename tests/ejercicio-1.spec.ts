import 'mocha';
import {Fighter} from "../src/Ejercicio_1/Fighter";
import {DC} from "../src/Ejercicio_1/DC";
import {Marvel} from "../src/Ejercicio_1/Marvel";
import {Pokemon} from "../src/Ejercicio_1/Pokemon";
import {Combat} from "../src/Ejercicio_1/Combate";
import { expect } from 'chai';

let DC1: DC      = new DC     ("BATMAN", 1.9, 90, 110, 100, "DC");
let AV1: Marvel  = new Marvel ("IRONMAN", 1.8, 110, 150, 200, "Avenger");
let PO1: Pokemon = new Pokemon("PIKACHU", 1.0, 70, 80, 90, "Electrico");

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

  //********************************************************* */

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

  //********************************************************* */

describe('Defensa de Objetos', () => {
  it("Defensa BATMAN es 110", () => {
    expect(DC1.getDef()).to.eql(110);
  });

  it("Defensa IRONMAN es 150", () => {
    expect(AV1.getDef()).to.eql(150);
  });

  it("Defensa BATMAN es 80", () => {
    expect(PO1.getDef()).to.eql(80);
  });
})

  //********************************************************* */

describe('Vida de Objetos', () => {
  it("Vida BATMAN es 100", () => {
    expect(DC1.getHP()).to.eql(100);
  });

  it("Vida IRONMAN es 200", () => {
    expect(AV1.getHP()).to.eql(200);
  });

  it("Vida PIKACHU es 90", () => {
    expect(PO1.getHP()).to.eql(90);
  });
})

  //********************************************************* */

describe('Tipo de Objetos', () => {
  it("Batman es DC", () => {
    expect(DC1.getType()).to.eql("DC");
  });

  it("IRONMAN es Marvel", () => {
    expect(AV1.getType()).to.eql("Avenger");
  });

  it("PIKACHU es Pokemon Electrico", () => {
    expect(PO1.getType()).to.eql("Electrico");
  });
})

 //** ************************** COMBATE ********************/

describe('Tipo de Objetos', () => {
  let Pelea1: Combat = new Combat(DC1, AV1);
  let Pelea2: Combat = new Combat(AV1, PO1);
  let Pelea3: Combat = new Combat(AV1, DC1);
  it("BATMAN vs IRONMAN", () => {
    expect(Pelea1.fight()).to.eql("El Vengador IRONMAN ha vencido");
  });

  it("IRONMAN vs PIKACHU", () => {
    expect(Pelea2.fight()).to.eql("El Vengador IRONMAN ha vencido");
  });

  it("IRONMAN vs BATMAN", () => {
    expect(Pelea3.fight()).to.eql("El Vengador IRONMAN ha vencido");
  });
})