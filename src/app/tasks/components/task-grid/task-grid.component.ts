import { Component } from '@angular/core';
import { TaskCardComponent } from '../task-card/task-card.component';

@Component({
  selector: 'app-task-grid',
  imports: [
    TaskCardComponent
  ],
  template: `
    <div class="task-grid">
			@for (task of tasks; track task.id) {
        <app-task-card/>
			}
    </div>
  `,
  styles: ``
})
export class TaskGridComponent {
  tasks = [];
}
