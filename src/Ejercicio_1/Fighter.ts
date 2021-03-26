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