import { Pipe, PipeTransform } from '@angular/core';
import {FactorialService} from "../services/factorial.service";

@Pipe({
  pure: true,
  name: 'factorial'
})
export class FactorialPipe implements PipeTransform {

  constructor(private factorialService: FactorialService) {
  }

  transform(value: unknown, ...args: unknown[]): unknown {
    if (typeof value === 'number') {
      let factorial: number = this.factorialService.factorial(value as number);
      console.log(`${value}) = factorial(${value}) => ${factorial}`);
      return factorial;
    } else {
      return null;
    }
  }

}


