import { Component, inject } from '@angular/core';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-new-task-modal',
  imports: [],
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
