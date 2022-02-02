import { Injectable } from '@angular/core';
import {FactorialService} from "./factorial.service";

@Injectable({
  providedIn: 'root'
})
export class ArrayService {

  constructor(private factorialService: FactorialService) { }

  private _arr: Array<number> = [];

  public get arr(): number[] {
    return this._arr;
  }

  public addNumber(num: number): void {
    for (let i = 0; i < num; i++) {
      // this._arr.push(this.factorialService.getRandomFactorial());
      this._arr.push(this.factorialService.getRandom());
    }
  }

}
