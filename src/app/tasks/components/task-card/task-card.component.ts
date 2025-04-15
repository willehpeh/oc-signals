import { Component, computed, input } from '@angular/core';
import { TaskCardHeaderComponent } from './task-card-header/task-card-header.component';
import { SubtasksListComponent } from './subtasks-list/subtasks-list.component';
import { Task } from '../../models/task';

@Component({
  selector: 'app-task-card',
  imports: [
    TaskCardHeaderComponent,
    SubtasksListComponent
  ],
  template: `
		<div class="task-card" [class.completed]="completed()">
			<app-task-card-header [task]="task()"/>
      <app-subtasks-list/>
		</div>
  `,
  styleUrls: ['./task-card.component.scss']
})
export class TaskCardComponent {
  task = input.required<Task>();
  completed = computed(() => this.task().completed);
}
