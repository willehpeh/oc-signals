import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators, FormArray } from '@angular/forms';
import { SubtaskFormControlComponent } from './subtask-form-control/subtask-form-control.component';

@Component({
  selector: 'app-new-task-modal-form',
  imports: [
    ReactiveFormsModule,
    SubtaskFormControlComponent,
  ],
  templateUrl: './new-task-modal-form.component.html',
  styleUrls: ['./new-task-modal-form.component.scss']
})
export class NewTaskModalFormComponent {
  private formBuilder = inject(FormBuilder);
  newTaskForm = this.formBuilder.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    subtasks: this.formBuilder.array([])
  });

  subtasksFormArray(): FormArray {
    return this.newTaskForm.get('subtasks') as FormArray;
  }
}
