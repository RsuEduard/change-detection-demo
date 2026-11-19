import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-eager-branch-leaf',
  templateUrl: './eager-branch-leaf.html',
  host: { class: 'node' },
  changeDetection: ChangeDetectionStrategy.Eager,
})
export class EagerBranchLeaf {
  count = 0;

  getCount(): number {
    this.count++;
    return this.count;
  }

  onClick(): void {}
}
