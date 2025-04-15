import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private _newTaskModalVisible = signal<boolean>(false);

  newTaskModalVisible = this._newTaskModalVisible.asReadonly();

  toggleNewTaskModal() {
    this._newTaskModalVisible.update(visible => !visible);
  }
}
