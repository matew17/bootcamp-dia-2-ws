import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatter'
})
export class FormatterPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    const newVal = value.split('/');
    return newVal[newVal.length - 1].split(' ')[0];
  }
}
