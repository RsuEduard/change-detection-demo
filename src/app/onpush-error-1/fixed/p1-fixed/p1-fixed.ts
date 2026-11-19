import { ChangeDetectionStrategy, Component } from '@angular/core';
import { C2 } from '../../c2/c2';
import { C1Fixed } from '../c1-fixed/c1-fixed';

@Component({
  selector: 'app-p1-error1-fixed',
  imports: [C1Fixed, C2],
  templateUrl: './p1-fixed.html',
  host: { class: 'node' },
  changeDetection: ChangeDetectionStrategy.Eager,
})
export class P1Fixed {
  count = 0;

  getCount(): number {
    this.count++;
    return this.count;
  }
}
