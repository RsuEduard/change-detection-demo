import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-eager',
  templateUrl: './eager.html',
  styles: `
    .btn {
      margin-right: 0.5rem;
    }
  `,
  changeDetection: ChangeDetectionStrategy.Eager,
})
export class Eager {
  count = 0;

  getCount(): number {
    this.count++;
    return this.count;
  }

  onClick(): void {
    console.log(this.count);
  }

  onClickWithTimeout(): void {
    setTimeout(() => {}, 1000);
  }

  onClickWithMultipleOps(): void {
    setTimeout(() => {}, 100);
    setTimeout(() => {}, 10);
    setTimeout(() => {}, 30);
  }
}
