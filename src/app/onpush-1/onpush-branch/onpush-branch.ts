import { ChangeDetectionStrategy, Component } from '@angular/core';
import { OnPushBranchLeaf } from './onpush-branch-leaf/onpush-branch-leaf';

@Component({
  selector: 'app-onpush-branch',
  imports: [OnPushBranchLeaf],
  templateUrl: './onpush-branch.html',
  host: { class: 'node node-onpush' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OnPushBranch {
  count = 0;

  getCount(): number {
    this.count++;
    return this.count;
  }

  onClick(): void {}
}
