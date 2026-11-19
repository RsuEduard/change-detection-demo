import { Service } from '@angular/core';

@Service()
export class NameService {
  // Plain field (not a signal), so reading it does not notify Angular of changes.
  name = 'initial';

  update(name: string): void {
    this.name = name;
  }
}
