/**
 * Class Mass
 * @param mass
 * @param originalUnit
 * @method convertItems
 */

import {isConvertible} from "./isConvertible"

export class Mass implements isConvertible<number> {
  Convertions: [number, string][] = [[2.2046, "POUNDS"], [35.27, "OZ"], [1, "KG"]]

  constructor(private readonly mass: number, private readonly originalUnit: string) {
  }

  convertItems(whichUnit: string): number {
    let result: number = 0;
    let factor1: number = 0;
    let factor2: number = 1;
    if (this.originalUnit === whichUnit) {
      return this.mass;
    }
    this.Convertions.forEach(C => {
      if (whichUnit === C[1]) {
        factor1 = C[0];
      } else if (this.originalUnit === C[1]) {
        factor2 = C[0];
      }
    });
    return parseFloat(((this.mass * factor1) / factor2).toFixed(2));

  }
}