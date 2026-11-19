import { Component, inject } from '@angular/core';
import { NameSignalStore } from '../name-signal.store';

@Component({
  selector: 'app-c2-signals1',
  templateUrl: './c2.html',
  host: { class: 'node node-onpush' },
})
export class C2 {
  protected readonly nameStore = inject(NameSignalStore);

  count = 0;

  getCount(): number {
    this.count++;
    return this.count;
  }
}
