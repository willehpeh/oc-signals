import { Component, computed, effect, inject } from '@angular/core';
import { TaskCardComponent } from '../task-card/task-card.component';
import { NewTaskModalComponent } from '../new-task-modal/new-task-modal.component';
import { TaskService } from '../../services/task.service';
import { TaskAction } from '../../models/task-action';

@Component({
  selector: 'app-task-grid',
  imports: [
    TaskCardComponent,
    NewTaskModalComponent
  ],
  template: `
    <div class="task-grid">
			@for (task of tasks(); track task.id) {
        <app-task-card [task]="task" 
                       (taskAction)="onTaskAction(task.id, $event)" 
                       (subtaskToggle)="onSubtaskToggle(task.id, $event)" />
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
  private currentPendingTaskIds = computed(() => this.tasks()
    .filter(task => !task.completed)
    .map(task => task.id)
    .join(',')
  );

  constructor() {
    effect(() => {
      const storedPendingTaskIds = localStorage.getItem('pendingTasks');
      if (storedPendingTaskIds !== this.currentPendingTaskIds()) {
        localStorage.setItem('pendingTasks', this.currentPendingTaskIds());
        console.log('Updated pending tasks in localStorage');
      }
    });
  }

  onTaskAction(id: string, action: TaskAction) {
    switch (action) {
      case 'complete':
        this.taskService.completeTask(id);
        break;
      case 'cancel':
        this.taskService.uncompleteTask(id);
        break;
      case 'delete':
        this.taskService.deleteTask(id);
        break;
    }
  }


  onSubtaskToggle(id: string, subtaskToggle: { title: string; checked: boolean }) {
    subtaskToggle.checked ?
      this.taskService.completeSubtask(id, subtaskToggle.title) :
      this.taskService.uncompleteSubtask(id, subtaskToggle.title);
  }
}
