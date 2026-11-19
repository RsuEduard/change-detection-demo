import { Component } from '@angular/core';
import { C2 } from '../c2/c2';

@Component({
  selector: 'app-c1-signals1',
  imports: [C2],
  templateUrl: './c1.html',
  host: { class: 'node node-onpush' },
})
export class C1 {
  count = 0;

  getCount(): number {
    this.count++;
    return this.count;
  }
}
