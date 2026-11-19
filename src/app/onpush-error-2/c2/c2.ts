import { Component, input } from '@angular/core';

export interface Person {
  name: string;
}

@Component({
  selector: 'app-c2',
  templateUrl: './c2.html',
  styles: `
    :host {
      display: block;
      border: 2px solid #c55a11;
      padding: 1rem;
      border-radius: 0.5rem;
    }
  `,
})
export class C2 {
  readonly person = input.required<Person>();
  clicks = 0;
}
