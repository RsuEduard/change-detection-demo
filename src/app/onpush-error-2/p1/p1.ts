import { Component } from '@angular/core';
import { C1 } from '../c1/c1';
import { C2, type Person } from '../c2/c2';
import { C3 } from '../c3/c3';

@Component({
  selector: 'app-p1-error2',
  imports: [C1, C2, C3],
  templateUrl: './p1.html',
  host: { class: 'node node-onpush' },
  styles: `
    .children {
      display: flex;
      gap: 1rem;
      margin-top: 1rem;
    }
  `,
})
export class P1 {
  // Plain (non-signal) fields on purpose, so only classic OnPush rules apply.
  prop1 = 'initial';
  prop2: Person = { name: 'initial' };

  private counter = 0;

  update(): void {
    this.counter++;
    this.prop1 = `updated ${this.counter}`;
    // Mutation: the object reference stays the same, so C2's input does not change.
    this.prop2.name = `updated ${this.counter}`;
  }
}
