import { Component } from '@angular/core';
import { TaskCardActionButtonComponent } from './task-card-action-button/task-card-action-button.component';

@Component({
  selector: 'app-task-card-header',
  imports: [
    TaskCardActionButtonComponent
  ],
  template: `
		<div class="task-card-header">
			<h2 class="task-title">Update Documentation</h2>
			<div class="task-actions">
				<app-task-card-action-button action="cancel"/>
        <app-task-card-action-button action="complete"/>
        <app-task-card-action-button action="delete"/>
			</div>
		</div>
		<p class="task-description">Review and update the API documentation with new endpoints</p>
  `,
  styleUrls: ['./task-card-header.component.scss']
})
export class TaskCardHeaderComponent {
}
