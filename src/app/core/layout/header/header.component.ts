import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  template: `
		<div class="header-container">
			<h1 class="header">{{ header() }}</h1>
			<p class="header-tagline">So your tasks aren't a chore to complete</p>
		</div>
  `,
  styles: ``
})
export class HeaderComponent {
  header = signal('Signalize');

  constructor() {
    setTimeout(() => {
      this.header.set('Signalize!');
    }, 2000);

    setTimeout(() => {
      this.header.update(header => header + '!');
    }, 3000);
  }
}
