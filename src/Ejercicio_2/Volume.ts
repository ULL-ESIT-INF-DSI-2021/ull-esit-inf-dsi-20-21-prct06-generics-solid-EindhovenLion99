/**
 * Class Volume
 * @param volume
 * @param originalUnit
 * @method convertItems
 */

import {isConvertible} from "./isConvertible"

export class Volume implements isConvertible<number> {
  constructor(private readonly volume: number, private readonly originalUnit: string) {
  }

  convertItems(whichUnit: string): number {
    if (this.originalUnit === whichUnit) {
      return this.volume;
    }
    if (whichUnit  === "Litro") {
      return parseFloat((this.volume * 3.785).toFixed(2));
    } else if (whichUnit === "Galon") {
      return parseFloat(((this.volume / 3.785).toFixed(2)));
    }
    return 0;
  }
}