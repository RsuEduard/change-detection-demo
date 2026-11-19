import { Service, signal } from '@angular/core';

@Service()
export class NameSignalStore {
  private readonly nameSignal = signal('initial');
  readonly name = this.nameSignal.asReadonly();

  private counter = 0;

  update(): void {
    this.counter++;
    this.nameSignal.set(`updated ${this.counter}`);
  }
}
