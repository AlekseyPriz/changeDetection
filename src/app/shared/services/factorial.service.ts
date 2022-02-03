import { Injectable } from '@angular/core';
import * as math from "mathjs";

@Injectable({
  providedIn: 'root'
})
export class FactorialService {

  public factorial(n: number): number {
    return math.factorial(n);
  }
}
