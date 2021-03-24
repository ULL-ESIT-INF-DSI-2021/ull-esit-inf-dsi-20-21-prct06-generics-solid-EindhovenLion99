import {Fighter} from "./Fighter";

export class DC extends Fighter {
  constructor(name: string, height: number, att: number,
              def: number, hp: number) {
                super(name, height, att, def, hp);
  }

  print(): void {
    console.log("El justiciero " + this.getName() + 
    " ataca con " + this.getAtt() + " de daño"); 
  }
}