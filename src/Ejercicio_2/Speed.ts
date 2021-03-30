/**
 * Class Speed
 * @param speed
 * @param originalUnit
 * @method convertItems
 */

import {isConvertible} from "./isConvertible"

export class Speed implements isConvertible<number> {

  constructor(private readonly speed: number, private readonly originalUnit: string) {
  }

  convertItems(whichUnit: string): number {
    let factor1: number = 0.27;
    let factor2: number = 3.6;
    if (this.originalUnit === whichUnit) {
      return this.speed;
    }
    if (whichUnit === "KMh") {
      return parseFloat((this.speed * factor2).toFixed(2));
    } else {
      return parseFloat((this.speed * factor1).toFixed(2));
    }
  }
}