import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'parsebreakline'
})
export class ParsebreaklinePipe implements PipeTransform {

  transform(value: string): string {
    return value.replace(/\n/g, '<br>');
  }
}
