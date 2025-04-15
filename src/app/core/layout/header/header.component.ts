import { Component, computed, signal } from '@angular/core';
import { NewTaskButtonComponent } from '../../../tasks/components/new-task-button/new-task-button.component';

@Component({
  selector: 'app-header',
  imports: [
    NewTaskButtonComponent
  ],
  template: `
		<div class="header-container">
			<h1 class="header">{{ header() }}</h1>
			<p class="header-tagline">{{ tagline() }}</p>
      <app-new-task-button/>
		</div>
  `,
  styles: `
    .header-container {
      text-align: center;
      margin-bottom: 3rem;
      position: relative;
    }

    .header {
      font-size: 3rem;
      font-weight: bold;
      margin-bottom: 0.5rem;
      background: linear-gradient(to right, #22d3ee, #a855f7);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
    }

    .header-tagline {
      font-size: 1.125rem;
      color: var(--text-secondary);
      font-weight: 400;
      letter-spacing: -0.025em;
    }
  `
})
export class HeaderComponent {

  private _taglines: string[] = [
    `So your tasks aren't a chore to complete`,
    `Organize your life with signals`,
    `Task management made simple`,
    `Stay productive with Signalize`
  ];

  header = signal<string>('Signalize');
  taglineIndex = signal<number>(0);
  tagline = computed<string>(() => this._taglines[this.taglineIndex()]);

  constructor() {
    setTimeout(() => {
      this.header.set('Signalize!');
    }, 2000);

    setTimeout(() => {
      this.header.update(header => header + '!');
    }, 3000);

    setInterval(() => {
      this.taglineIndex.set(Math.floor(Math.random() * this._taglines.length));
    }, 5000);
  }
}
