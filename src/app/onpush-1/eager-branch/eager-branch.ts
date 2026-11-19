import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EagerBranchLeaf } from './eager-branch-leaf/eager-branch-leaf';

@Component({
  selector: 'app-eager-branch',
  imports: [EagerBranchLeaf],
  templateUrl: './eager-branch.html',
  host: { class: 'node' },
  changeDetection: ChangeDetectionStrategy.Eager,
})
export class EagerBranch {
  count = 0;

  getCount(): number {
    this.count++;
    return this.count;
  }

  onClick(): void {}
}
