import { Pipe, PipeTransform } from '@angular/core';
import {Sublease} from "../_models/sublease";

@Pipe({
  name: 'costPipe'
})
export class CostPipe implements PipeTransform {

  transform(array: Sublease[], args?: number[]): any {
    let [minCost, maxCost] = args;
    if (!array) return array;
    return array.filter(sublease =>  sublease.price == undefined || (sublease.price >= +minCost && sublease.price <= +maxCost));
  }

}
