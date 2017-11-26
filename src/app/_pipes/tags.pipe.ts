import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tagsPipe'
})
export class TagsPipe implements PipeTransform {

  transform(array: any[], tags?: any[]): any {
    console.log("Array: " + JSON.stringify(array) + " : Tags: " + JSON.stringify(tags));
    if (!array) return array;
    if (tags.length == 0) return array;
    return array.filter(sublease => sublease.tags == undefined || sublease.tags.indexOf(tags[0]) !== -1);
  }
}
