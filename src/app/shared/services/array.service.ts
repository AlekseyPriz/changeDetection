import { Injectable } from '@angular/core';
import {RandomService} from "./random.service";

@Injectable({
  providedIn: 'root'
})
export class ArrayService {

  constructor(private randomService: RandomService) { }

  private _arr: Array<number> = [];

  public get arr(): number[] {
    return this._arr;
  }

  public addNumber(num: number): void {
    for (let i = 0; i < num; i++) {
      this._arr.push(this.randomService.getRandomNumber());
    }
  }

}
