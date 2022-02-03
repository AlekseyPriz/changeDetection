import { Component } from '@angular/core';
import * as math from 'mathjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {
    this.addNumber(10_000);
  }

  private renderCounter: number = 0;

  public arr: Array<number> = [];

  public refresh(i: number): void {
    this.arr[i] = this.getRandomFactorial();
  }

  public action(): void {
    this.renderCounter += 1;
    let random = Math.floor(Math.random() * 100);
    console.log(`${this.renderCounter}) factorial(${random}) => ${this.factorial(random)}`);
  }

  public addNumber(num: number): void {
    for (let i = 0; i < num; i++) {
      this.arr.push(this.getRandomFactorial());
    }
  }

  private getRandomFactorial(): number {
    let random = Math.floor(Math.random() * 100);
    return this.factorial(random);
  }

  public factorial(n: number): number {
    return math.factorial(n);
  }

}
