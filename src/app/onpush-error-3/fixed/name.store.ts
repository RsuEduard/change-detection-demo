import { Service } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Service()
export class NameStore {
  private readonly nameSubject = new BehaviorSubject('initial');
  readonly name$ = this.nameSubject.asObservable();

  update(name: string): void {
    this.nameSubject.next(name);
  }
}
