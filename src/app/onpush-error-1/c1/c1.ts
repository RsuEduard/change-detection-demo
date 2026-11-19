import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { delay } from 'rxjs';

interface User {
  name: string;
}

@Component({
  selector: 'app-c1',
  templateUrl: './c1.html',
  host: { class: 'node node-onpush' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class C1 {
  private readonly http = inject(HttpClient);

  count = 0;
  data = 'not loaded';
  private responses = 0;

  getCount(): number {
    this.count++;
    return this.count;
  }

  load(): void {
    this.data = 'loading...';
    this.http
      .get<User>('user.json')
      .pipe(delay(1000))
      .subscribe((user) => {
        this.responses++;
        this.data = `${user.name} (response #${this.responses})`;
      });
  }
}
