import { Fighter } from "./Fighter";
import { Pokemon } from "./Pokemon";
import { DC } from "./DC";

export class Marvel extends Fighter {
  constructor(name: string, height: number, att: number,
              def: number, hp: number, type: string) {
                super(name, height, att, def, hp, type);
  }

  efficiency<T extends (DC | Marvel | Pokemon)>(P2: T, damage: number): number {
    if (this.getType() === "Avenger") {
      if (P2.getType() === "DC")
        return damage;
      if (P2.getType() === "Avenger")
        return damage; 
    }
    return damage * 2;
  }

  print(): string {
    return "El Vengador " + this.getName() + " ha vencido";
  }
}