import { Component, inject } from '@angular/core';
import { C1 } from '../c1/c1';
import { NameSignalStore } from '../name-signal.store';

@Component({
  selector: 'app-p1-signals1',
  imports: [C1],
  templateUrl: './p1.html',
  host: { class: 'node node-onpush' },
})
export class P1 {
  private readonly nameStore = inject(NameSignalStore);

  count = 0;

  getCount(): number {
    this.count++;
    return this.count;
  }

  update(): void {
    this.nameStore.update();
  }
}
