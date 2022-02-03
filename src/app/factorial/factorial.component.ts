import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import * as math from 'mathjs';
import {RenderCounterService} from "../shared/services/render-counter.service";
import {RandomService} from "../shared/services/random.service";

@Component({
  selector: 'factorial',
  templateUrl: './factorial.component.html',
  styleUrls: ['./factorial.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FactorialComponent {

  @Input() value!: number;

  constructor(private renderCounter: RenderCounterService,
              private randomService: RandomService) {
  }

  public action() {
    this.renderCounter.incrementValue('child');
  }

  public refresh(): void {
    this.value = this.randomService.getRandomNumber();
  }

}
