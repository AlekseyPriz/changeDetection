import { Injectable } from '@angular/core';
import {FactorialService} from "./factorial.service";
import {RandomService} from "./random.service";

@Injectable({
  providedIn: 'root'
})
export class RenderCounterService {

  constructor(private factorialService: FactorialService,
              private randomService: RandomService) {
  }

  private _renderCounter: number = 0;

  public get value(): number {
    return this._renderCounter;
  }

  public incrementValue(sours: string): void {
    this._renderCounter += 1;
    // this.logMessage(sours);
  }

  private logMessage(sours: string): void {
    let random: number = this.randomService.getRandomNumber();
    let factorial: number = this.factorialService.factorial(random);
    console.log(`${this.value}) ${sours} = factorial(${random}) => ${factorial}`);
  }



}
