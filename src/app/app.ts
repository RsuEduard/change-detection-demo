import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { OnPushError1Example } from './onpush-error-1/onpush-error-1-example';
import { OnPushError2Example } from './onpush-error-2/onpush-error-2-example';
import { OnPushError3Example } from './onpush-error-3/onpush-error-3-example';
import { Eager } from './eager/eager';
import { OnPush1Root } from './onpush-1/onpush1-root';
import { Signals1Example } from './signals-1/signals-1-example';

interface Tab {
  title: string;
  index: number;
}

@Component({
  imports: [
    OnPushError1Example,
    OnPushError2Example,
    OnPushError3Example,
    Eager,
    OnPush1Root,
    Signals1Example,
  ],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.Eager,
})
export class App {
  protected readonly tabs: Tab[] = [
    { title: 'Ex1', index: 0 },
    { title: 'Ex2', index: 1 },
    { title: 'Ex3', index: 2 },
    { title: 'Ex4', index: 3 },
    { title: 'Ex5', index: 4 },
    { title: 'Ex6', index: 5 },
  ];
  protected readonly activeTab = signal(0);
}
