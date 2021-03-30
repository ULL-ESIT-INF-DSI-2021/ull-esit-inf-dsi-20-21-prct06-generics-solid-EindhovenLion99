/**
 * Class Temperature
 * @param temperature
 * @param originalUnit
 * @method convertItems
 */

import {isConvertible} from "./isConvertible"

export class Temperature implements isConvertible<number> {
  constructor(private readonly temperature: number, private readonly originalUnit: string) {
  }

  convertItems(whichUnit: string): number {
    if (this.originalUnit === whichUnit) {
      return this.temperature;
    }
    if (this.originalUnit  === "Celsius") {
      if (whichUnit === "Fahrenheit") {
        return parseFloat((this.temperature * 9/5 + 32).toFixed(2));
      } else if (whichUnit === "Kelvin") {
        return parseFloat((this.temperature + 273.15).toFixed(2));
      }
    } else if (this.originalUnit === "Fahrenheit") {
      if (whichUnit === "Celsius") {
        return parseFloat(((this.temperature - 32) * 5/9).toFixed(2));
      } else if (whichUnit === "Kelvin") {
        return parseFloat(((this.temperature - 32) * 5/9 + 273.15).toFixed(2));
      }
    } else if (this.originalUnit === "Kelvin") {
      if (whichUnit === "Celsius") {
        return parseFloat((this.temperature - 273.15).toFixed(2));
      } else if (whichUnit === "Fahrenheit") {
        return parseFloat(((this.temperature - 273.15) * 9/5 + 32).toFixed(2));
      }
    }
    return 0;
  }
}