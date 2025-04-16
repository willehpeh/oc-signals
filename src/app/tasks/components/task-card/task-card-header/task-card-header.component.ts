import { Component, input, output } from '@angular/core';
import { Task } from '../../../models/task';
import { TaskCardActionButtonComponent } from './task-card-action-button/task-card-action-button.component';
import { TaskAction } from '../../../models/task-action';

@Component({
  selector: 'app-task-card-header',
  imports: [
    TaskCardActionButtonComponent
  ],
  template: `
		<div class="task-card-header" [class.completed]="task().completed">
			<h2 class="task-title">{{ task().title }}</h2>
			<div class="task-actions">
				@if (task().completed) {
					<app-task-card-action-button action="cancel" (click)="onTaskAction('cancel')"/>
				} @else {
					<app-task-card-action-button action="complete" (click)="onTaskAction('complete')"/>
				}
				<app-task-card-action-button action="delete" (click)="onTaskAction('delete')"/>
			</div>
		</div>
		<p class="task-description">{{ task().description }}</p>
  `,
  styleUrls: ['./task-card-header.component.scss']
})
export class TaskCardHeaderComponent {
  task = input.required<Task>();
  taskAction = output<TaskAction>();

  onTaskAction(action: TaskAction) {
    this.taskAction.emit(action);
  }
}
