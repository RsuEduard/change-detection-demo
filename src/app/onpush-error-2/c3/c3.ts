import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export interface Person {
  name: string;
}

@Component({
  selector: 'app-c3',
  templateUrl: './c3.html',
  host: { class: 'node' },
  changeDetection: ChangeDetectionStrategy.Eager,
})
export class C3 {
  readonly person = input.required<Person>();
  clicks = 0;
}
