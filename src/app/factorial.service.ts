import { Injectable } from '@angular/core';
import * as math from 'mathjs';


@Injectable({
  providedIn: 'root'
})
export class FactorialService {

  public getRandomFactorial(): number {
    return this.factorial(this.getRandom());
  }

  public factorial(n: number): number {
    return math.factorial(n);
  }

  public getRandom(): number {
    return Math.floor(Math.random() * 100);
  }

}
