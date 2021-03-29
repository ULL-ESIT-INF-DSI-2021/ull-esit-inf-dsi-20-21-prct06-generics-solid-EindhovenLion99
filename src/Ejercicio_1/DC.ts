import { Fighter } from "./Fighter";
import { Pokemon } from "./Pokemon";
import { Marvel } from "./Marvel";

export class DC extends Fighter {
  constructor(name: string, height: number, att: number,
              def: number, hp: number, type: string) {
                super(name, height, att, def, hp, type);
  }

  efficiency<T extends (DC | Marvel | Pokemon)>(P2: T, damage: number): number {
    if (P2.getType() === "Pokemon")
      return damage * 2;
    if (P2.getType() === "DC")
      return damage; 
    if (P2.getType()=== "Avenger")
      return damage * 0.5;
    return 0;
  }

  print(): string {
    return "El justiciero " + this.getName() + " ha vencido"; 
  }
}