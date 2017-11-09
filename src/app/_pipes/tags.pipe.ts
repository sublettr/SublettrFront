import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tagsPipe'
})
export class TagsPipe implements PipeTransform {

  transform(array: any[], tags?: any[]): any {
    return array.filter(sublease => tags.some(tag => tag.value == sublease.value));

  }
}
