import { ChangeDetectionStrategy, Component } from '@angular/core';
import { P1 } from './p1/p1';
import { P1Fixed } from './fixed/p1-fixed/p1-fixed';

@Component({
  selector: 'app-onpush-error1-example',
  imports: [P1, P1Fixed],
  templateUrl: './onpush-error-1-example.html',
  // Eager so Zone.js ticks can reach the eager components inside.
  changeDetection: ChangeDetectionStrategy.Eager,
})
export class OnPushError1Example {
  showFix = false;

  protected readonly brokenCode = `// c1.ts (OnPush)
this.http.get<User>('user.json').subscribe((user) => {
  this.data = user.name;
});`;

  protected readonly fixedCode = `// c1-fixed.ts (OnPush)
private readonly cdr = inject(ChangeDetectorRef);

this.http.get<User>('user.json').subscribe((user) => {
  this.data = user.name;
  this.cdr.markForCheck();
});`;
}
