import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortSentence'
})
export class ShortSentencePipe implements PipeTransform {

  transform(value: string, maxLength: number = 10): string {

    if (value) {
      return value.slice(0, maxLength) + '...';
    }

    return value;
  }



}
