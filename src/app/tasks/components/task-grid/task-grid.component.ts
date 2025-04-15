import { Component, inject } from '@angular/core';
import { TaskCardComponent } from '../task-card/task-card.component';
import { NewTaskModalComponent } from '../new-task-modal/new-task-modal.component';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-grid',
  imports: [
    TaskCardComponent,
    NewTaskModalComponent
  ],
  template: `
    <div class="task-grid">
			@for (task of tasks(); track task.id) {
        <app-task-card [task]="task"/>
			}
    </div>
    <app-new-task-modal/>
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
  private taskService = inject(TaskService);
  tasks = this.taskService.tasks();
}
