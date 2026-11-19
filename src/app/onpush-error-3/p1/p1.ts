import { Component, inject } from '@angular/core';
import { C1 } from '../c1/c1';
import { C2 } from '../c2/c2';
import { C3 } from '../c3/c3';
import { NameService } from '../name.service';

@Component({
  selector: 'app-p1-error3',
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
  protected readonly nameService = inject(NameService);

  prop1 = 'initial';

  private counter = 0;

  update(): void {
    this.counter++;
    this.prop1 = `updated ${this.counter}`;
    this.nameService.update(`updated ${this.counter}`);
  }
}
