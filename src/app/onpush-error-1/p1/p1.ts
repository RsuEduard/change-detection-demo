import { ChangeDetectionStrategy, Component } from '@angular/core';
import { C1 } from '../c1/c1';
import { C2 } from '../c2/c2';

@Component({
  selector: 'app-p1-error1',
  imports: [C1, C2],
  templateUrl: './p1.html',
  host: { class: 'node' },
  changeDetection: ChangeDetectionStrategy.Eager,
})
export class P1 {
  count = 0;

  getCount(): number {
    this.count++;
    return this.count;
  }
}
