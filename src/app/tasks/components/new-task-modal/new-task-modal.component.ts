import { Component, inject } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { NewTaskModalHeaderComponent } from './new-task-modal-header/new-task-modal-header.component';
import { NewTaskModalFormComponent } from './new-task-modal-form/new-task-modal-form.component';

@Component({
  selector: 'app-new-task-modal',
  imports: [
    NewTaskModalHeaderComponent,
    NewTaskModalFormComponent
  ],
  templateUrl: './new-task-modal.component.html',
  styleUrls: ['./new-task-modal.component.scss']
})
export class NewTaskModalComponent {
  private modalService = inject(ModalService);
  show = this.modalService.newTaskModalVisible;

  onCancel() {
    this.modalService.toggleNewTaskModal();
  }

  onCreateTask() {

  }
}
