import { Component } from '@angular/core';
import { TaskCardActionButtonComponent } from './task-card-action-button/task-card-action-button.component';

@Component({
  selector: 'app-task-card-header',
  imports: [
    TaskCardActionButtonComponent
  ],
  template: `
		<div class="task-card-header" [class.completed]="completed">
			<h2 class="task-title">{{ title }}</h2>
			<div class="task-actions">
				@if (completed) {
					<app-task-card-action-button action="cancel"/>
				} @else {
					<app-task-card-action-button action="complete"/>
				}
				<app-task-card-action-button action="delete"/>
			</div>
		</div>
		<p class="task-description">{{ description }}</p>
  `,
  styleUrls: ['./task-card-header.component.scss']
})
export class TaskCardHeaderComponent {
  title = 'Update Documentation';
  description = 'Review and update the API documentation with new endpoints';
  completed = false;
}
