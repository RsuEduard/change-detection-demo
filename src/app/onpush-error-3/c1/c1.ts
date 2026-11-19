import { Component, input } from '@angular/core';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.html',
  styles: `
    :host {
      display: block;
      border: 2px solid #c55a11;
      padding: 1rem;
      border-radius: 0.5rem;
    }
  `,
})
export class C1 {
  readonly value = input.required<string>();
}
