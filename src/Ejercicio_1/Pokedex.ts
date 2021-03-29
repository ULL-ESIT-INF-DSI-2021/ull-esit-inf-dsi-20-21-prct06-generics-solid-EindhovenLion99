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