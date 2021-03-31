/**
 * Class DocMovie
 * @param objects
 * @method getObjectDate
 * @method getObjectName
 * @method getObjectDuration
 */


 import {Movie} from './Movie';
 import {BasicStreamableCollection} from './BasicStreamableCollection';
 
 
 export class MovieCollection extends BasicStreamableCollection<Movie> {
   constructor(objects: Movie[]) {
     super(objects);
   }
 
   getObjectDate(date_: number): Movie[] {
     return this.objects.filter((obj: Movie) => obj.getDate() === date_);
   }
 
   getObjectName(name_: string): Movie[] {
     return this.objects.filter((obj: Movie) => obj.getName() === name_);
   }
 
   getObjectDuration(duration_: number): Movie[] {
     return this.objects.filter((obj: Movie) => obj.getDuration() === duration_);
   }
 }
 
