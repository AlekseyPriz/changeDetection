import { Pipe, PipeTransform } from '@angular/core';
import memo from 'memo-decorator';
import * as math from 'mathjs';

@Pipe({
  pure: true,
  name: 'factorial'
})
export class FactorialPipe implements PipeTransform {
  @memo()
  transform(value: unknown, ...args: unknown[]): unknown {
    if (typeof value === 'number') {
      let factorial: number = math.factorial(value as number)
      console.log(`${value}) = factorial(${value}) => ${factorial}`);
      return factorial;
    } else {
      return null;
    }
  }

}


