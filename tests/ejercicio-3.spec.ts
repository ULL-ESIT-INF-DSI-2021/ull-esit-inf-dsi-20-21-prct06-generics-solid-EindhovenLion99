import 'mocha';
import {expect} from 'chai';
import {Streamable} from "../src/Ejercicio_3/Streamable";
import {BasicStreamableCollection} from "../src/Ejercicio_3/BasicStreamableCollection";
import {Documental} from "../src/Ejercicio_3/Doc";
import {Movie} from "../src/Ejercicio_3/Movie";
import {Serie} from "../src/Ejercicio_3/Serie";
import {MovieCollection} from "../src/Ejercicio_3/MovieCollection";
import {DocCollection} from "../src/Ejercicio_3/DocCollection";
import {SerieCollection} from "../src/Ejercicio_3/SeriesCollection";

const coleccion1: DocCollection = new DocCollection([
  new Documental('Documental de la 1', 1970, 40),
  new Documental('Documental de Doscovery Chanel', 1980, 54),
  new Documental('Documental del canal de historia', 2001, 82),
]);

const coleccion2: MovieCollection = new MovieCollection([
  new Movie('Spiderman', 2001, 120),
  new Movie('End Game', 2019, 181),
  new Movie('Oceans 12', 2003, 125),
]);

const coleccion3: SerieCollection = new SerieCollection([
  new Serie('La casa de papel', 2017, 4),
  new Serie('F1', 2018, 3),
  new Serie('Prison Break', 2004, 5),
]);

describe("Coleccion de Series", () => {
  it("Numero de series en la coleccion es 3", () => {
    expect(coleccion3.lenght()).to.eql(3);
  })
})

describe("Coleccion de Peliculas", () => {
  it("Numero de peliculas en la coleccion es 3", () => {
    expect(coleccion2.lenght()).to.eql(3);
  })
})

describe("Coleccion de Documentales", () => {
  it("Numero de documentales en la coleccion es 3", () => {
    expect(coleccion1.lenght()).to.eql(3);
  })
})