import { Component } from '@angular/core';

@Component({
  selector: 'app-new-task-button',
  imports: [],
  template: `
		<button class="new-task-button">
			<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>
			New Task
		</button>
  `,
  styleUrls: ['./new-task-button.component.scss']
})
export class NewTaskButtonComponent {

}
