import { Component } from '@angular/core';
import { P1 } from './p1/p1';
import { P1Fixed } from './fixed/p1-fixed/p1-fixed';

@Component({
  selector: 'app-onpush-error2-example',
  imports: [P1, P1Fixed],
  templateUrl: './onpush-error-2-example.html',
})
export class OnPushError2Example {
  showFix = false;

  protected readonly brokenCode = `// p1.ts
this.prop2.name = 'updated';

// p1.html
<app-c2 [person]="prop2" />`;

  protected readonly fixedCode = `// p1-fixed.ts
this.prop2 = { ...this.prop2, name: 'updated' };`;
}
