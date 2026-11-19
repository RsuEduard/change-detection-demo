import { Component, inject } from '@angular/core';
import { NameService } from '../name.service';

@Component({
  selector: 'app-c2',
  templateUrl: './c2.html',
  styles: `
    :host {
      display: block;
      border: 2px solid #c55a11;
      padding: 1rem;
      border-radius: 0.5rem;
    }
  `,
})
export class C2 {
  protected readonly nameService = inject(NameService);
  clicks = 0;
}
