
/**
 * Class Stremeable
 * @method addObject
 * @method lenght
 * @method getObjectName
 * @method getObjectDate
 * @method getObjectDuration
 */


export interface Streamable<T> {
  addObject(newObjet: T): void;
  lenght(): number;
  getObjectName(name: string): T[];
  getObjectDate(date: number): T[];
  getObjectDuration(duration: number): T[];
}