import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  template: `
		<div class="header-container">
			<h1 class="header">{{ header() }}</h1>
			<p class="header-tagline">{{ tagline() }}</p>
		</div>
  `,
  styles: ``
})
export class HeaderComponent {

  private _taglines: string[] = [
    `So your tasks aren't a chore to complete`,
    `Organize your life with signals`,
    `Task management made simple`,
    `Stay productive with Signalize`
  ];

  header = signal('Signalize');
  tagline = signal(this._taglines[0]);

  constructor() {
    setTimeout(() => {
      this.header.set('Signalize!');
    }, 2000);

    setTimeout(() => {
      this.header.update(header => header + '!');
    }, 3000);

    setInterval(() => {
      this.tagline.set(this._taglines[Math.floor(Math.random() * this._taglines.length)]);
    }, 5000);
  }
}
