import { Component } from '@angular/core';
import { TaskCardComponent } from '../task-card/task-card.component';
import { Task } from '../../models/task';
import { DUMMY_TASKS } from '../../test-data/DUMMY_TASKS';
import { TaskList } from '../../models/task-list';

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
  styles: `
    .task-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 1.5rem;
      margin-bottom: 2rem;
    }

    @media (max-width: 768px) {
      .task-grid {
        grid-template-columns: 1fr;
      }
    }
  `
})
export class TaskGridComponent {
  taskList: TaskList = new TaskList(DUMMY_TASKS);
  tasks: Task[] = this.taskList.tasks();
}
