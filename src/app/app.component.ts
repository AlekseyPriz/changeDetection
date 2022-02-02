import {ChangeDetectionStrategy, ChangeDetectorRef, Component} from '@angular/core';
import {RenderCounterService} from "./render-counter.service";
import {ArrayService} from "./array.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  constructor(private renderCounter: RenderCounterService,
              private arrayService: ArrayService,
              private ref: ChangeDetectorRef) {

    this.addNumber(10_000);

    this.arr = this.arrayService.arr;

  }

  public arr: Array<number>;

  public action() {
    this.renderCounter.incrementValue('parent');
  }

  public addNumber(num: number): void {
    this.arrayService.addNumber(num);
  }

}
