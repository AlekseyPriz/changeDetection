import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import * as math from 'mathjs';
import {RenderCounterService} from "../render-counter.service";

@Component({
  selector: 'factorial',
  templateUrl: './factorial.component.html',
  styleUrls: ['./factorial.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FactorialComponent {

  @Input() value!: number;

  constructor(private renderCounter: RenderCounterService) {
  }

  public action() {
    this.renderCounter.incrementValue('child');
    // let random = Math.floor(Math.random() * 100);
    // console.log(`${this.renderCounter.value}) Child = factorial(${random}) => ${this.factorial(random)}`);
  }

  public refresh(): void {
    this.value = this.getRandomFactorial();
  }


  private getRandomFactorial(): number {
    let random = Math.floor(Math.random() * 100);
    return this.factorial(random);
  }

  public factorial(n: number): number {
    return math.factorial(n);
  }

}
