import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FirstComponent, SecondComponent],
  template: `
    <h1>CSS Encapsulation with Angular Components</h1>
    <p>
      <a href="https://coryrylan.com/blog/css-encapsulation-with-angular-components">Tutorial at coryrylan.com</a>
    </p>
    <div class="cmp">
      App Component
      <app-first></app-first>
      <app-second></app-second>
    </div>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
