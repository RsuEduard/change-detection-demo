import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NameService } from '../name.service';

@Component({
  selector: 'app-c3',
  templateUrl: './c3.html',
  host: { class: 'node' },
  changeDetection: ChangeDetectionStrategy.Eager,
})
export class C3 {
  protected readonly nameService = inject(NameService);
  clicks = 0;
}
