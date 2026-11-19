import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-onpush-branch-leaf',
  templateUrl: './onpush-branch-leaf.html',
  host: { class: 'node' },
  changeDetection: ChangeDetectionStrategy.Eager,
})
export class OnPushBranchLeaf {
  count = 0;

  getCount(): number {
    this.count++;
    return this.count;
  }

  onClick(): void {}
}
