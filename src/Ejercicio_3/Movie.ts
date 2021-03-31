/**
 * Class Documental
 * @param name
 * @param date
 * @param duration
 * @method getName
 * @method getDate
 * @method getDuration
 */

export class Movie {

  constructor(private readonly name: string, private readonly date: number, private readonly duration: number) {
  }

  getName(): string {
    return this.name;
  }

  getDate(): number {
    return this.date;
  }

  getDuration(): number {
    return this.duration;
  }
}