/**
 * Class DocCollection
 * @param objects
 * @method getObjectDate
 * @method getObjectName
 * @method getObjectDuration
 */

import {Documental} from './Doc';
import {BasicStreamableCollection} from './BasicStreamableCollection';


export class DocCollection extends BasicStreamableCollection<Documental> {
  constructor(objects: Documental[]) {
    super(objects);
  }

  getObjectDate(date_: number): Documental[] {
    return this.objects.filter((obj: Documental) => obj.getDate() === date_);
  }

  getObjectName(name_: string): Documental[] {
    return this.objects.filter((obj: Documental) => obj.getName() === name_);
  }

  getObjectDuration(duration_: number): Documental[] {
    return this.objects.filter((obj: Documental) => obj.getDuration() === duration_);
  }
}

