import { Component } from '@angular/core';
import { TaskCardHeaderComponent } from './task-card-header/task-card-header.component';
import { SubtasksListComponent } from './subtasks-list/subtasks-list.component';

@Component({
  selector: 'app-task-card',
  imports: [
    TaskCardHeaderComponent,
    SubtasksListComponent
  ],
  template: `
		<div class="task-card">
			<app-task-card-header/>
      <app-subtasks-list/>
		</div>
  `,
  styleUrls: ['./task-card.component.scss']
})
export class TaskCardComponent {
}
