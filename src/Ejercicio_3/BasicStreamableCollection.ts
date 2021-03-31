/**
 * Class BasicStremeableCollection
 * @param objects
 * @method addObject
 * @method lenght
 * @method getObjectName
 * @method getObjectDate
 * @method getObjectDuration
 */

import {Streamable} from "./Streamable";

export abstract class BasicStreamableCollection<T> implements Streamable<T> {
  constructor(protected objects: T[]) {}

  addObject(newObject: T): void {
    this.objects.push(newObject);
  }

  lenght(): number {
    return this.objects.length;
  }

  abstract getObjectName(name: string): T[];
  abstract getObjectDate(date: number): T[];
  abstract getObjectDuration(duration: number): T[];
}