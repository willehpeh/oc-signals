import { Component, inject, signal } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { NewTaskModalHeaderComponent } from './new-task-modal-header/new-task-modal-header.component';
import { NewTaskModalFormComponent } from './new-task-modal-form/new-task-modal-form.component';
import { nullCreateTaskDto } from '../../models/create-task.dto';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-new-task-modal',
  imports: [
    NewTaskModalHeaderComponent,
    NewTaskModalFormComponent
  ],
  template: `
		@if (show()) {
			<div class="modal-overlay">
				<div class="modal">
					<app-new-task-modal-header (close)="onCancel()"/>
					<app-new-task-modal-form/>
					<div class="modal-actions">
						<button class="modal-button cancel" (click)="onCancel()">Cancel</button>
						<button class="modal-button create" (click)="onCreateTask()">Create Task</button>
					</div>
				</div>
			</div>
		}
  `,
  styleUrls: ['./new-task-modal.component.scss']
})
export class NewTaskModalComponent {
  newTask = signal(nullCreateTaskDto());

  private modalService = inject(ModalService);
  show = this.modalService.newTaskModalVisible;

  private taskService = inject(TaskService);

  onCancel() {
    this.resetNewTask();
    this.closeModal();
  }

  onCreateTask() {
    // this.taskService.addTask(this.newTask());
    console.log(this.newTask());
    this.closeModal();
  }

  private resetNewTask() {
    this.newTask.set(nullCreateTaskDto());
  }

  private closeModal(): void {
    this.modalService.toggleNewTaskModal();
  }
}
