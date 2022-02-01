import { Injectable } from '@angular/core';
import {FactorialService} from "./factorial.service";

@Injectable({
  providedIn: 'root'
})
export class RenderCounterService {

  constructor(private factorialService: FactorialService) {
  }

  private _renderCounter: number = 0;

  public get value(): number {
    return this._renderCounter;
  }

  public incrementValue(sours: string): void {
    this._renderCounter += 1;
    this.logMessage(sours);
  }

  private logMessage(sours: string): void {
    let random: number = this.factorialService.getRandom();
    console.log(`${this.value}) ${sours} = factorial(${random}) => ${this.factorialService.factorial(random)}`);
  }



}
