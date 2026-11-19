import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { C1 } from '../../c1/c1';
import { NameStore } from '../name.store';
import { C2Fixed } from '../c2-fixed/c2-fixed';

@Component({
  selector: 'app-p1-error3-fixed',
  imports: [AsyncPipe, C1, C2Fixed],
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
  protected readonly nameStore = inject(NameStore);

  prop1 = 'initial';

  private counter = 0;

  update(): void {
    this.counter++;
    this.prop1 = `updated ${this.counter}`;
    this.nameStore.update(`updated ${this.counter}`);
  }
}
