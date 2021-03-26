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