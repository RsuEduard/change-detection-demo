import { Component } from '@angular/core';
import { C1 } from '../../c1/c1';
import { C2, type Person } from '../../c2/c2';

@Component({
  selector: 'app-p1-error2-fixed',
  imports: [C1, C2],
  templateUrl: './p1-fixed.html',
  host: { class: 'node node-onpush' },
  styles: `
    .children {
      display: flex;
      gap: 1rem;
      margin-top: 1rem;
    }
  `,
})
export class P1Fixed {
  prop1 = 'initial';
  prop2: Person = { name: 'initial' };

  private counter = 0;

  update(): void {
    this.counter++;
    this.prop1 = `updated ${this.counter}`;
    this.prop2 = { ...this.prop2, name: `updated ${this.counter}` };
  }
}
