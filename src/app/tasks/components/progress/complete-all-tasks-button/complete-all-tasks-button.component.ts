import { Component } from '@angular/core';

@Component({
  selector: 'app-complete-all-tasks-button',
  imports: [],
  template: `
		<button class="complete-all-button">
			<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
					 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
				<circle cx="12" cy="12" r="10"/>
				<path d="m9 12 2 2 4-4"/>
			</svg>
			Complete All Tasks
		</button>
  `,
  styleUrls: ['./complete-all-tasks-button.component.scss']
})
export class CompleteAllTasksButtonComponent {

}
