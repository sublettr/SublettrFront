import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'CostPipe'
})
export class CostPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let [minCost, maxCost] = args;
    return value.filter(sublease => {
      return sublease.price >= +minCost && sublease.price <= +maxCost;
    });
  }

}
