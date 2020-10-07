import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'rate',
})
// @ts-ignore
export class RatePipe implements PipeTransform {
  public transform(value: number): number | undefined {

    let n: number;
    n = value - Math.trunc(value);

    if (0.25 <= n && n < 0.75) {
      return (value - n) + 0.5;
    }
    if (0.25 > n) {
      return value - n;
    }

    if (n > 0.75) {
      return (value - n) + 1;
    }

  }
}
