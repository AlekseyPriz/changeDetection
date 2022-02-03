import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RenderCounterService} from "./shared/services/render-counter.service";
import {ArrayService} from "./shared/services/array.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  constructor(private renderCounter: RenderCounterService,
              private arrayService: ArrayService,) {
    this.addNumber(10_000);
    this.setArr();
  }

  public arr!: Array<number>;

  public action(): void {
    this.renderCounter.incrementValue('parent');
  }

  public addNumber(num: number): void {
    this.arrayService.addNumber(num);
  }

  private setArr(): void {
    this.arr = this.arrayService.arr;
  }

}
