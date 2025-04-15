import { Component, inject } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { NewTaskModalHeaderComponent } from './new-task-modal-header/new-task-modal-header.component';

@Component({
  selector: 'app-new-task-modal',
  imports: [
    NewTaskModalHeaderComponent
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
