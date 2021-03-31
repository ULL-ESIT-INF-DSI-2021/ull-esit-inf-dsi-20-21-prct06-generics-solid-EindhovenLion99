# Informe Practica 6

**Indice**

1. [Objetivos de la practica](#id1)
2. [Ejercicios](#id2)
3. [Tests](#id3)
4. [Generacion de Documentacion](#id4)
5. [Coveralls](#id5)

*** 

## Objetivos de la practica <a name="id1"></a>

En esta practica vamos a realizar una serie de ejercicios a clases e interfaces genericas en TypeSript. Incluyendo en esta practica los principios SOLID.

## Ejercicios <a name="id2"></a>

### Ejercicio 1 - El combate definitivo

Para este ejercicio usaremos clases similares a la anterior practica, en este caso tenemos la clase Fighter, que sera una clase abstracta, de la cual heredera las clases ```Pokemon```, ```Marvel``` y ```DC```. Veamos la clase ```Fighter```:

```typescript
/**
 * Class Fighter
 * @param name
 * @method getName
 * @method getAtt
 * @method getDef
 * @method getHP
 * @method print
 */

import { Marvel } from "./Marvel";
import { Pokemon } from "./Pokemon";
import { DC } from "./DC";

export abstract class Fighter {
  constructor(private readonly name: string, private readonly height: number,
              private readonly att: number, private readonly def: number, 
              public hp: number, private readonly type: string) {
  }

  getName(): string {
    return this.name;
  }

  getHeight(): number {
    return this.height;
  }

  getAtt(): number {
    return this.att;
  }

  getDef(): number {
    return this.def;
  }

  getHP(): number {
    return this.hp;
  }

  getType(): string {
    return this.type;
  }

  abstract print(): string;
  abstract efficiency<T extends (DC | Marvel | Pokemon)>(F2: T, damage: number): number;
}
```

Tenemos una serie de atributos en la clase abstracta, estos los tendran las diferentes clases de luichadores, Pokemon, Marvel y DC. Tenemos nombre, altura, ataque, defensa, puntos de vida y tipo.

Cada uno de estos atributos tendra un getter, ademas tenemos dos funciones abstractas, ```print```, que imprime que el luchador ha ganado y ```efficiency```, que calcula el daño que va a hacer un luchador dependiendo de su contrincante. Esta ultima recive por parametro un objeto de tipo T, el cual se extiende a DC, Marvel o Pokemon.

Veamos una clase luchador:

```typescript
import { Fighter } from "./Fighter";
import { Pokemon } from "./Pokemon";
import { DC } from "./DC";

export class Marvel extends Fighter {
  constructor(name: string, height: number, att: number,
              def: number, hp: number, type: string) {
                super(name, height, att, def, hp, type);
  }

  efficiency<T extends (DC | Marvel | Pokemon)>(P2: T, damage: number): number {
    if (P2.getType() === "DC")
      return damage;
    if (P2.getType() === "Avenger")
      return damage;
    return damage * 2;
  }

  print(): string {
    return "El Vengador " + this.getName() + " ha vencido";
  }
}
```

Tenemos un constructor parametrizado, pero esta no tiene ningun atributo propio, si no que crea el objeto a partir de la clase super, su padre. Por otro lado tenemos el metodo ```efficiency```, el cual calcula la eficacia del ataque que tendra el luchador contra su contrincante a lo largo de la batalla. Luego tenemos el print, que imprime que ha ganado un vengador (Marvel). Las clases Pokemon y DC seran similares, pero cambiando el metodo ```efficiency```.

Por ultimo la clase Combat, la cual realizara la lucha entre los personajes.

```typescript
import {Fighter} from "./Fighter";

export class Combat {
  constructor(private readonly F1: Fighter, private readonly F2: Fighter) {
  }

  fight(): string {
    let life1 = this.F1.getHP();
    let life2 = this.F2.getHP();

    let damage1: number = 50 * (this.F1.getAtt() / this.F2.getDef());
    let damage2: number = 50 * (this.F2.getAtt() / this.F1.getDef());

    damage1 = this.F1.efficiency(this.F2, damage1);
    damage2 = this.F2.efficiency(this.F1, damage2);

    do {
      console.log(this.F1.getName() + " attacks " + this.F2.getName());
      life2 -= damage1;
      console.log(this.F1.getName() + " does " + damage1.toPrecision(4) + " damage");
      console.log("(" + life1.toPrecision(4) + ") - (" + life2.toPrecision(4) + ")");

      if (life2 >= 1) {
        console.log(this.F2.getName() + " attacks " + this.F1.getName());
        life1 -= damage2;
        console.log(this.F2.getName() + " does " + damage2.toPrecision(4) + " damage");
        console.log("(" + life2.toPrecision(4) + ") - (" + life1.toPrecision(4) + ")");
      }
    } while (life1 >= 1 && life2 >= 1);

    if (life1 >= 1) {
      return this.F1.print();
    } else {
      return this.F2.print();
    }
  }
}
```

La clase combate, en el constructor recibe como parametro dos luchadores, luego, tenemos un metodo ```fight()```, que hara que se enfrenten entre si. Primero guardamos en variables auxiliares la vida de cada luchador, para que estas no se vean modificadas durante la lucha. El resto de la pelea sigue las mismas instrucciones que la pelea entre pokemons de la practica anterior, calculando la eficiencia de cada ataque de cada luchador, una vez acaba la pelea, mostramos el ganador con la funcion ```print(```).

Por ultimo tenemos una clase ```pokedex```, la cual recibe por parametro un vector de luchadores, esta nos sirve por si queremos mostrar todos los luchadores declarados, la funcion retorna el lenght del array para que la comprobacion en el spec sea mas sencilla.

```typescript
import {Fighter} from "./Fighter";

export class Pokedex {
  constructor(private readonly Array: Fighter[]){
  }

  showPokedex(): number {
    this.Array.forEach(fighter => {
      console.log(fighter.getName() + " con " + fighter.getHP() + " de vida");
    });
    return this.Array.length;
  }
}
```

### Ejercicio 2 - Conversor de unidades

Para realizar este ejercicio hemos tenido que crear una interfaz generica llamada ```isConvertible```, la cual ofrece una estructura concreta para las clases que vamos a utilizar:

```typescript
/**
 * Class isConvertible
 * @method convertItems
 */

export interface isConvertible<T> {
  convertItems(whichUnit: string): number;
}
```

Esta interfaz es generica, puede recibir cualquier tipo (T) y trabajar con el, en este caso siempre utilizara el tipo de dato number. Dentro de esta interfaz tenemos una funcion convertItems, comun para todas las funciones de conversion de las otras clases, esta, recibe como valor el tipo al que se convertira la unidad. Por ejemplo, tenemos el objeto ```time(5, "s")```, que indica 5 segundos, si llamamos a convertItems de la clase time con el parametro "h", pasaria los 5 segundos a horas.

Por otro lado tenemos las diferentes maginitudas, enseñare algunas de ejemplo:

* Clase Speed:

```typescript
/**
 * Class Speed
 * @param speed
 * @param originalUnit
 * @method convertItems
 */

import {isConvertible} from "./isConvertible"

export class Speed implements isConvertible<number> {

  constructor(private readonly speed: number, private readonly originalUnit: string) {
  }

  convertItems(whichUnit: string): number {
    let factor1: number = 0.27;
    let factor2: number = 3.6;
    if (this.originalUnit === whichUnit) {
      return this.speed;
    }
    if (whichUnit === "KMh") {
      return parseFloat((this.speed * factor2).toFixed(2));
    } else {
      return parseFloat((this.speed * factor1).toFixed(2));
    }
  }
}
```

Vemos que es una clase que implementa la clase isConvertible<number>, usando el tipo de objeto number, tiene un constructor parametrizado, speed y originalUnit, como indicamos en el parrafo anterior.
Tambien tenemos la funcion convertItems, que para cada clase funcionara diferente, en este caso, tenemos dos constantes, para pasar de metro/segundo a km/h o viceversa, esas constantes las multiplicaremos por el numero que pasamos al constructor.

En este ejemplo podemos ver una funcion de conversion mas compleja:

```typescript
/**
 * Class Time
 * @param time
 * @param originalUnit
 * @method convertItems
 */

import {isConvertible} from "./isConvertible"

export class Time implements isConvertible<number> {
  constructor(private readonly time: number, private readonly originalUnit: string) {
  }

  conversor_string: string[] = ["s", "m", "h", "d", "S", "M"];
  conversor_time: number[]   = [60,   60,  60, 24,   7,  30];

  convertItems(whichUnit: string): number {
    if (this.originalUnit === whichUnit) {
      return this.time;
    }
    let aux = this.time;
    let index2convert = this.conversor_string.findIndex(t => t === whichUnit);
    let index_actual = this.conversor_string.findIndex(t => t === this.originalUnit);
    if (index2convert > index_actual) {
      for (let i = index_actual; i < index2convert; i++) {
        aux /= this.conversor_time[i+1]; 
      }
      return parseFloat(aux.toFixed(2));
    } else {
      for (let i = index_actual; i > index2convert; i--) {
        aux *= this.conversor_time[i-1]; 
      }
      return parseFloat(aux.toFixed(2));
    }
    return 0;
  }
}
```

Para esta tenemos dos vectores, uno con un string al que se va a cambiar, es decir, el ```whichUnit```, y por otro lado tenemos un vector de number, los cuales tienen el factor de multiplicacion, en la misma posicion que el vector de string. Primero tenemos que hayar los indices del vector ```conversor_string```, con esto sabremos de que posicion a que posicion tenemos que pasar, luego comprobamos cual de los indices es mayor, segun eso hacemos un for que se recorre de la posicion inicial a la que queremos llegar, siguiendo los factores de miltiplicacion, o division, dependiendo a que unidad queramos convertir. El resto de clases se pueden ver en el codigo.

### Ejercicio 3 - DSIflix

Para hacer este ejercicio necesitaremos hacer uso de una interfaz generica Stremeable, que tendra la siguiente estructura:

```typescript

/**
 * Class Stremeable
 * @method addObject
 * @method lenght
 * @method getObjectName
 * @method getObjectDate
 * @method getObjectDuration
 */


export interface Streamable<T> {
  addObject(newObjet: T): void;
  lenght(): number;
  getObjectName(name: string): T[];
  getObjectDate(date: number): T[];
  getObjectDuration(duration: number): T[];
}
```

En esta interfaz generica encontramos los metodos ```addObject(newObject: T)```, al cual le pasamos por parametro un objeto generico (T), un metodo ```lenght()```, ```getObjectName()```, ```getObjectDate()``` y ```getObjectDuration()```.

Por otro lado tenemos otra clase generica, llamada ```BasicStreamableCollection()```, la cual implementa la clase ```Streamable```:

```typescript 
import {Streamable} from "./Streamable";

export abstract class BasicStreamableCollection<T> implements Streamable<T> {
  constructor(protected objects: T[]) {}

  addObject(newObject: T): void {
    this.objects.push(newObject);
  }

  lenght(): number {
    return this.objects.length;
  }

  abstract getObjectName(name: string): T[];
  abstract getObjectDate(date: number): T[];
  abstract getObjectDuration(duration: number): T[];
}
```

Podemos ver que esta clase es abstracta, tiene como constructor un vector de elementos T, luego, dos metodos descritos en la propia clase, ```addObject``` y ```lenght```, luego los 3 metodos restantes seran abstractos ya que cada clase lo implementara a su manera.

Luego creamos las clase collection de cada tipo, ```pelicula```, ```documental``` y ```serie```, de esta forma:

```typescript
import {Documental} from './Doc';
import {BasicStreamableCollection} from './BasicStreamableCollection';


export class DocCollection extends BasicStreamableCollection<Documental> {
  constructor(objects: Documental[]) {
    super(objects);
  }

  getObjectDate(date_: number): Documental[] {
    return this.objects.filter((obj: Documental) => obj.getDate() === date_);
  }

  getObjectName(name_: string): Documental[] {
    return this.objects.filter((obj: Documental) => obj.getName() === name_);
  }

  getObjectDuration(duration_: number): Documental[] {
    return this.objects.filter((obj: Documental) => obj.getDuration() === duration_);
  }
}
```

Aqui vemos como seria la clase DocCollection, que se extiende a BasicStreamableCollection, a su vez, esta misma es creada con el tipo Documental, que veremos mas adelante. Vemos que aqui tenemos los metodos abstarctos declarados anteriormente, estos retornan el objeto a buscar en la coleccion, segun su nomnbre, fecha, o duracion, esto lo haremos gracias a la funcion ```filter()```. Tanto la clase ```MovieCollection``` y ```SeriesCollection``` estan implementadas de la misma forma.

Por ultimo, vamos a ver los tipos Documental, Series y Pelicula, los cuales tienen la misma estrcutura, vamos a ver como seria por ejemplo, la de tipo Documental:

```typescript
export class Documental {

  constructor(private readonly name: string, private readonly date: number, private readonly duration: number) {
  }

  getName(): string {
    return this.name;
  }

  getDate(): number {
    return this.date;
  }

  getDuration(): number {
    return this.duration;
  }
}
```

Estas clases tienen un constructor sencillo, con los atributos privados ```name```, ```date``` y ```duration```, tambien los getters de cada una de los atributos anteriores. En los test podemos ver como funcionan las clases.

## Tests <a name="id3"></a>

Para testear el funcionamiento de las clases hicimos uso de ```mocha``` y ```chai```. Veamos el test del ejercicio 1:

```typescript
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
  let Pokedex1: Pokedex = new Pokedex([DC1, AV1, PO1]);

  it("BATMAN vs IRONMAN", () => {
    expect(Pelea1.fight()).to.eql("El Vengador IRONMAN ha vencido");
  });

  it("IRONMAN vs PIKACHU", () => {
    expect(Pelea2.fight()).to.eql("El Vengador IRONMAN ha vencido");
  });

  it("IRONMAN vs BATMAN", () => {
    expect(Pelea3.fight()).to.eql("El Vengador IRONMAN ha vencido");
  });

  it("POKEDEX lenght is 3", () => {
    // Retorna el numero de luchadores
    expect(Pokedex1.showPokedex()).to.eql(3);
  })
})
```

Para comprobar que todo funcionaba creamos 3 objetos luchadores, Iron-Man, Batman y Pikachu, en los primeros test comprobamos que se creaban instancias de cada tipo correctamente, que creaba el nombre, el ataque, la salud, la defense y el tipo correcto. Una vez comprobado eso hicimos un test de la pelea (Clase Combat). Pusimos a luchar a Batman contra Iron-Man, y este ultimo salio ganador, y asi con tres peleas mas, al final hicimos un pequrño test de que la pokedex con los luchadores se crease bien y mostrase los luchadores y comprobase la longitud del vector de luchadores.


Tests del ejercicio 2:

```typescript
let Dist1: Distance = new Distance(230, "KM");
let Dist2: Distance = new Distance(100, "YARD");

let mass1: Mass = new Mass(100, "KG");
let mass2: Mass = new Mass(60, "POUNDS");
let mass3: Mass = new Mass(40, "OZ");

let speed1: Speed = new Speed(100, "KMh");
let speed2: Speed = new Speed(60, "MS");

let time1: Time = new Time(100, "s");
let time2: Time = new Time(43, "h");

let temp1: Temperature = new Temperature(100, "Celsius");
let temp2: Temperature = new Temperature(43, "Kelvin");

let force1: Force = new Force(300, "Kilopondio");
let force2: Force = new Force(23, "Newton");

let vol1: Volume = new Volume(20, "Litro");
let vol2: Volume = new Volume(100, "Galon");

describe('Distance', () => {
  it("230 KM son 251531 Yardas", () => {
    expect(Dist1.convertItems("YARD")).to.eql(251530.3);
  });
  it("230 KM son 123.97 Millas", () => {
    expect(Dist1.convertItems("MILE")).to.eql(123.97);
  });
  it("100 Yardas son 0.05 Millas", () => {
    expect(Dist2.convertItems("MILE")).to.eql(0.05);
  });
})

describe('Mass', () => {
  it("100 Kg son 220.46 Libras", () => {
    expect(mass1.convertItems("POUNDS")).to.eql(220.46);
  });
  it("60 LB son 27.21 Libras", () => {
    expect(mass2.convertItems("KG")).to.eql(27.22);
  });
  it("40 OZ son 1.13 Kg", () => {
    expect(mass3.convertItems("KG")).to.eql(1.13);
  });
})

describe('Speed', () => {
  it("100 KmH son 27 Ms", () => {
    expect(speed1.convertItems("MS")).to.eql(27);
  });
  it("60 MS son 216 KMh", () => {
    expect(speed2.convertItems("KMh")).to.eql(216);
  });
})

describe('Time', () => {
  it("100 s son 1.66 m", () => {
    expect(time1.convertItems("m")).to.eql(1.67);
  });
  it("43 h son 154800 m", () => {
    expect(time2.convertItems("s")).to.eql(154800);
  });
})

describe('Temperature', () => {
  it("100 Celsius son 212 Fahrenheit", () => {
    expect(temp1.convertItems("Fahrenheit")).to.eql(212);
  });
  it("43 Kelvin son -230.15 Celsius", () => {
    expect(temp2.convertItems("Celsius")).to.eql(-230.15);
  });
})

describe('Force', () => {
  it("300 Kilopondios son 2941.99 Newton", () => {
    expect(force1.convertItems("Newton")).to.eql(2942.1);
  });
  it("23 Newton son 2.35 Kilopondio", () => {
    expect(force2.convertItems("Kilopondio")).to.eql(2.35);
  });
})

describe('Volume', () => {
  it("20 Litros son 5.28 Galones", () => {
    expect(vol1.convertItems("Galon")).to.eql(5.28);
  });
  it("100 Galones son 75.70 Litros", () => {
    expect(vol2.convertItems("Litro")).to.eql(378.5);
  });
})
```

Para el ejercicio 2, creamos muchos objetos de cada tipo de magnitud, luego llamabamos a la funcion convertItems de cada uno, y comprobando que devolvia el resultado correcto.

Por ultimo para el ejercicio 3, creamos los siguientes tests:

```typescript
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
```

Creamos tres colecciones diferentes de peliculas, series y documentales, hicimos solamente los test de que la longitud de los vectores fuese la correcta, no se hizo comprobacion de que se añadiese un objeto al vector ni que devolviese el objeto a la hora de buscar, ya que no sabia como poner el objeto en la funcion ```.to.eql()```.

## Generacion de Documentacion <a name="id4"></a>

Para la generacion de documentacion, ralizamos los mismos pasos que en la practica anterior:

```bash
npm run doc
```

Este comando en realidad usa el comando que tenemos en el package.json, ```typedoc```.

Generaria este arbol:

```
📦documentation
 ┣ 📂assets
 ┃ ┣ 📂css
 ┃ ┃ ┗ 📜main.css
 ┃ ┣ 📂images
 ┃ ┃ ┣ 📜icons.png
 ┃ ┃ ┣ 📜icons@2x.png
 ┃ ┃ ┣ 📜widgets.png
 ┃ ┃ ┗ 📜widgets@2x.png
 ┃ ┗ 📂js
 ┃ ┃ ┣ 📜main.js
 ┃ ┃ ┗ 📜search.js
 ┣ 📂classes
 ┃ ┣ 📜ejercicio_1_combate.combat.html
 ┃ ┣ 📜ejercicio_1_dc.dc.html
 ┃ ┣ 📜ejercicio_1_fighter.fighter.html
 ┃ ┣ 📜ejercicio_1_marvel.marvel.html
 ┃ ┣ 📜ejercicio_1_pokedex.pokedex.html
 ┃ ┣ 📜ejercicio_1_pokemon.pokemon.html
 ┃ ┣ 📜ejercicio_2_distance.distance.html
 ┃ ┣ 📜ejercicio_2_force.force.html
 ┃ ┣ 📜ejercicio_2_mass.mass.html
 ┃ ┣ 📜ejercicio_2_speed.speed.html
 ┃ ┣ 📜ejercicio_2_temperature.temperature.html
 ┃ ┣ 📜ejercicio_2_time.time.html
 ┃ ┣ 📜ejercicio_2_volume.volume.html
 ┃ ┣ 📜ejercicio_3_basicstreamablecollection.basicstreamablecollection.html
 ┃ ┣ 📜ejercicio_3_doc.documental.html
 ┃ ┣ 📜ejercicio_3_doccollection.doccollection.html
 ┃ ┣ 📜ejercicio_3_movie.movie.html
 ┃ ┣ 📜ejercicio_3_moviecollection.moviecollection.html
 ┃ ┣ 📜ejercicio_3_serie.serie.html
 ┃ ┗ 📜ejercicio_3_seriescollection.seriecollection.html
 ┣ 📂interfaces
 ┃ ┣ 📜ejercicio_2_isconvertible.isconvertible.html
 ┃ ┗ 📜ejercicio_3_streamable.streamable.html
 ┣ 📂modules
 ┃ ┣ 📜ejercicio_1_combate.html
 ┃ ┣ 📜ejercicio_1_dc.html
 ┃ ┣ 📜ejercicio_1_fighter.html
 ┃ ┣ 📜ejercicio_1_marvel.html
 ┃ ┣ 📜ejercicio_1_pokedex.html
 ┃ ┣ 📜ejercicio_1_pokemon.html
 ┃ ┣ 📜ejercicio_2_distance.html
 ┃ ┣ 📜ejercicio_2_force.html
 ┃ ┣ 📜ejercicio_2_isconvertible.html
 ┃ ┣ 📜ejercicio_2_mass.html
 ┃ ┣ 📜ejercicio_2_speed.html
 ┃ ┣ 📜ejercicio_2_temperature.html
 ┃ ┣ 📜ejercicio_2_time.html
 ┃ ┣ 📜ejercicio_2_volume.html
 ┃ ┣ 📜ejercicio_3_basicstreamablecollection.html
 ┃ ┣ 📜ejercicio_3_doc.html
 ┃ ┣ 📜ejercicio_3_doccollection.html
 ┃ ┣ 📜ejercicio_3_movie.html
 ┃ ┣ 📜ejercicio_3_moviecollection.html
 ┃ ┣ 📜ejercicio_3_serie.html
 ┃ ┣ 📜ejercicio_3_seriescollection.html
 ┃ ┗ 📜ejercicio_3_streamable.html
 ┣ 📜index.html
 ┗ 📜modules.html
 ```

## Coveralls <a name="id5"></a>

Para hacer el cubrimiento con coveralls, tuvimos que instalar un paquete llamado ```coveralls```, lo hicimos con el siguiente comando:

```bash
npm install --save-dev nyc coveralls
```

Luego, iniciamos sesion en la pagina web, con nuestro usuario de github, añadimos nuestro repo a coveralls, este nos proporcionaba una clave, la cual introducimos en un archivo ```.coveralls.yml```.
Una vez hecho esto ejecutamos el comando ```coverage```:

```json
"coverage": "nyc npm test && nyc report --reporter=text-lcov | coveralls && rm -rf .nyc_output"
```

COn este comando se nos subia el repo para hacer el cubrimiento, a fecha actual, el proyecto se ha subido, pero no ha finalizado el proceso. El badge del coverage sigue en ```unknown```.