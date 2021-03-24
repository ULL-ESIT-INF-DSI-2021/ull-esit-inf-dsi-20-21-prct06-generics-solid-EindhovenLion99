import {Fighter} from "./Fighter";

export class Pokemon extends Fighter {
  constructor(name: string, height: number, att: number,
              def: number, hp: number, type: string) {
                super(name, height, att, def, hp, type);
  }

  efficiency(P2: Pokemon, damage: number): number {
    if (this.type === "Fuego") {
      if (P2.type === "Fuego" || P2.type === "Electrico")
        return damage;
      if (P2.type === "Agua")
        return 0.5 * damage; 
      if (P2.type === "Hierba")
        return 2 * damage;
    } else if (this.type === "Agua") {
        if (P2.type === "Agua")
          return damage;
        if (P2.type === "Hierba" || P2.type === "Electrico")
          return 0.5 * damage; 
        if (P2.type === "Fuego")
          return 2 * damage;
    } else if (this.type === "Hierba") {
        if (P2.type === "Hierba" || P2.type === "Electrico")
          return damage;
        if (P2.type === "Fuego")
          return 0.5 * damage; 
        if (P2.type === "Agua")
          return 2 * damage;
    } else if (this.type === "Electrico") {
        if (P2.type === "Electrcio" || P2.type === "Hierba" || P2.type === "Fuego")
          return damage;
        if (P2.type === "Agua")
          return 2 * damage;
    }
    return 0;
  }

  print(): void {
    console.log("El Pokemon " + this.getName() + 
    " ataca con " + this.getAtt() + " de daño"); 
  }
}