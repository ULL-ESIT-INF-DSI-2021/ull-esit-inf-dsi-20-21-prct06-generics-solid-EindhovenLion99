import {Fighter} from "./Fighter";
import { Marvel } from "./Marvel";
import { DC } from "./DC";

export class Pokemon extends Fighter {
  constructor(name: string, height: number, att: number,
              def: number, hp: number, type: string) {
                super(name, height, att, def, hp, type);
  }

  efficiency<T extends (DC | Marvel | Pokemon)>(P2: T, damage: number): number {
    if (this.getType() === "Fuego") {
      if (P2.getType() === "Fuego" || P2.getType() === "Electrico")
        return damage;
      if (P2.getType() === "Agua")
        return 0.5 * damage; 
      if (P2.getType()=== "Hierba")
        return 2 * damage;
    } else if (this.getType() === "Agua") {
        if (P2.getType() === "Agua")
          return damage;
        if (P2.getType() === "Hierba" || P2.getType() === "Electrico")
          return 0.5 * damage; 
        if (P2.getType()=== "Fuego")
          return 2 * damage;
    } else if (this.getType() === "Hierba") {
        if (P2.getType() === "Hierba" || P2.getType() === "Electrico")
          return damage;
        if (P2.getType() === "Fuego")
          return 0.5 * damage; 
        if (P2.getType() === "Agua")
          return 2 * damage;
    } else if (this.getType() === "Electrico") {
        if (P2.getType() === "Electrcio" || P2.getType() === "Hierba" || P2.getType() === "Fuego")
          return damage;
        if (P2.getType() === "Agua")
          return 2 * damage;
    }
    return damage * 0.5;
  }

  print(): string {
    return "El Pokemon " + this.getName() + " ha vencido"; 
  }
}