import { Component, computed, input, output } from '@angular/core';
import { TaskCardHeaderComponent } from './task-card-header/task-card-header.component';
import { SubtasksListComponent } from './subtasks-list/subtasks-list.component';
import { Task } from '../../models/task';
import { TaskAction } from '../../models/task-action';

@Component({
  selector: 'app-task-card',
  imports: [
    TaskCardHeaderComponent,
    SubtasksListComponent
  ],
  template: `
		<div class="task-card" [class.completed]="completed()">
			<app-task-card-header [task]="task()"
														(taskAction)="onTaskAction($event)"/>
			<app-subtasks-list [subtasks]="task().subtasks" (subtaskToggle)="onSubtaskToggle($event)"/>
		</div>
  `,
  styleUrls: ['./task-card.component.scss']
})
export class TaskCardComponent {
  task = input.required<Task>();
  completed = computed(() => this.task().completed);
  taskAction = output<TaskAction>();
  subtaskToggle = output<{ title: string; checked: boolean }>();

  onTaskAction(action: TaskAction) {
    this.taskAction.emit(action);
  }

  onSubtaskToggle(toggleEvent: { title: string; checked: boolean }) {
    this.subtaskToggle.emit(toggleEvent);
  }
}
