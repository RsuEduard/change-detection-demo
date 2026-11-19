import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EagerBranch } from './eager-branch/eager-branch';
import { OnPushBranch } from './onpush-branch/onpush-branch';

@Component({
  selector: 'app-onpush1-root',
  imports: [OnPushBranch, EagerBranch],
  templateUrl: './onpush1-root.html',
  host: { class: 'node' },
  changeDetection: ChangeDetectionStrategy.Eager,
})
export class OnPush1Root {
  count = 0;

  getCount(): number {
    this.count++;
    return this.count;
  }
}
