import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ratingPipe'
})
export class RatingPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let [rating] = args;
    return value.filter(sublease => {
      return sublease.rating >= +rating;
    });
  }

}
