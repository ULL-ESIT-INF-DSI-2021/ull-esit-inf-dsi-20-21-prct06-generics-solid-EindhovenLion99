/**
 * Class Fighter
 * @param name
 * @method getName
 * @method getAtt
 * @method getDef
 * @method getHP
 * @method print
 */

export abstract class Fighter {
  constructor(private readonly name: string, private readonly height: number,
              private readonly att: number, private readonly def: number, 
              private readonly hp: number, public readonly type?: string) {
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

  /*
  getType(): string {
    return this.type;
  }
  */

  abstract print(): void;
}