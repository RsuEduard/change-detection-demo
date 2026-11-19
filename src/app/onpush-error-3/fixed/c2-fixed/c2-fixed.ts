import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { NameStore } from '../name.store';

@Component({
  selector: 'app-c2-fixed',
  imports: [AsyncPipe],
  templateUrl: './c2-fixed.html',
  styles: `
    :host {
      display: block;
      border: 2px solid #c55a11;
      padding: 1rem;
      border-radius: 0.5rem;
    }
  `,
})
export class C2Fixed {
  protected readonly nameStore = inject(NameStore);
}
