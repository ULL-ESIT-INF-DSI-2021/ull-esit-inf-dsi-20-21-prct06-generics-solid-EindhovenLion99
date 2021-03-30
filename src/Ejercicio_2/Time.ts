/**
 * Class Time
 * @param time
 * @param originalUnit
 * @method convertItems
 */

import {isConvertible} from "./isConvertible"

export class Time implements isConvertible<number> {
  

  constructor(private readonly time: number, private readonly originalUnit: string) {
  }

  conversor_string: string[] = ["s", "m", "h", "d", "S", "M"];
  conversor_time: number[]   = [60,   60,  60, 24,   7,  30];

  convertItems(whichUnit: string): number {
    if (this.originalUnit === whichUnit) {
      return this.time;
    }
    let aux = this.time;
    let index2convert = this.conversor_string.findIndex(t => t === whichUnit);
    let index_actual = this.conversor_string.findIndex(t => t === this.originalUnit);
    if (index2convert > index_actual) {
      for (let i = index_actual; i < index2convert; i++) {
        aux /= this.conversor_time[i+1]; 
      }
      return parseFloat(aux.toFixed(2));
    } else {
      for (let i = index_actual; i > index2convert; i--) {
        aux *= this.conversor_time[i-1]; 
      }
      return parseFloat(aux.toFixed(2));
    }
    return 0;
  }
}