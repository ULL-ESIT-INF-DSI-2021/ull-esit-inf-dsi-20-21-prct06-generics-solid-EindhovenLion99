/**
 * Class Force
 * @param force
 * @param originalUnit
 * @method convertItems
 */

import {isConvertible} from "./isConvertible"

export class Force implements isConvertible<number> {
  constructor(private readonly force: number, private readonly originalUnit: string) {
  }

  convertItems(whichUnit: string): number {
    if (this.originalUnit === whichUnit) {
      return this.force;
    }
    if (this.originalUnit  === "Kilopondio") {
      return parseFloat((this.force * 9.807).toFixed(2));
    } else if (this.originalUnit === "Newton") {
      return parseFloat(((this.force / 9.807).toFixed(2)));
    }
    return 0;
  }
}