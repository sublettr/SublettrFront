import {Sublease} from "../_models/sublease";
import {Pipe} from "@angular/core";

@Pipe({
  name: "orderby"
})
export class OrderByPipe {
  transform(array: Sublease[], property: string): Sublease[] {
    if (property === 'none' || !array || array === undefined) {
      return array;
    }
    if (property === 'pricehigh' || property === 'ratinghigh') {
      if (property === 'pricehigh') {
        property = 'price';
      }
      if (property === 'ratinghigh') {
        property = 'rating';
      }
      array.sort((a: Sublease, b: Sublease) => {
        if (a[property] > b[property]) {
          return -1;
        } else if (a[property] < b[property]) {
          return 1;
        } else {
          return 0;
        }
      });
    } else {
      if (property === 'pricelow') {
        property = 'price';
      }
      if (property === 'ratinglow') {
        property = 'rating';
      }
      array.sort((a: Sublease, b: Sublease) => {
        if (a[property] < b[property]) {
          return -1;
        } else if (a[property] > b[property]) {
          return 1;
        } else {
          return 0;
        }
      });
    }
    return array;
  }
}
