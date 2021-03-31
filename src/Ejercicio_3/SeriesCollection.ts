/**
 * Class DocSeries
 * @param objects
 * @method getObjectDate
 * @method getObjectName
 * @method getObjectDuration
 */


 import {Serie} from './Serie';
 import {BasicStreamableCollection} from './BasicStreamableCollection';
 
 
 export class SerieCollection extends BasicStreamableCollection<Serie> {
   constructor(objects: Serie[]) {
     super(objects);
   }
 
   getObjectDate(date_: number): Serie[] {
     return this.objects.filter((obj: Serie) => obj.getDate() === date_);
   }
 
   getObjectName(name_: string): Serie[] {
     return this.objects.filter((obj: Serie) => obj.getName() === name_);
   }
 
   getObjectDuration(duration_: number): Serie[] {
     return this.objects.filter((obj: Serie) => obj.getDuration() === duration_);
   }
 }
 
