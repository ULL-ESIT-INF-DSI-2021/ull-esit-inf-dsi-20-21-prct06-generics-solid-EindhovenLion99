/**
 * Class Distance
 * @param lenght
 * @param originalUnit
 * @method convertItems
 */

import {isConvertible} from "./isConvertible"

export class Distance implements isConvertible<number> {
  Convertions: [number, string][] = [[1093.61, "YARD"], [0.539, "MILE"], [1, "KM"]]

  constructor(private readonly lenght: number, private readonly originalUnit: string) {
  }

  convertItems(whichUnit: string): number {
    let result: number = 0;
    let factor1: number = 0;
    let factor2: number = 1;
    if (this.originalUnit === whichUnit) {
      return this.lenght;
    }
    this.Convertions.forEach(C => {
      if (whichUnit === C[1]) {
        factor1 = C[0];
      } else if (this.originalUnit === C[1]) {
        factor2 = C[0];
      }
    });
    return parseFloat(((this.lenght * factor1) / factor2).toFixed(2));
  }
}