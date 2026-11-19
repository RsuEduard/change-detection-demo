import { Component } from '@angular/core';
import { P1 } from './p1/p1';
import { P1Fixed } from './fixed/p1-fixed/p1-fixed';

@Component({
  selector: 'app-onpush-error3-example',
  imports: [P1, P1Fixed],
  templateUrl: './onpush-error-3-example.html',
})
export class OnPushError3Example {
  showFix = false;

  protected readonly brokenCode = `// name.service.ts
name = 'initial';

update(name: string): void {
  this.name = name;
}

// c2.html
{{ nameService.name }}`;

  protected readonly fixedCode = `// name.store.ts
private readonly nameSubject = new BehaviorSubject('initial');
readonly name$ = this.nameSubject.asObservable();

update(name: string): void {
  this.nameSubject.next(name);
}

// c2-fixed.html
{{ nameStore.name$ | async }}`;
}
