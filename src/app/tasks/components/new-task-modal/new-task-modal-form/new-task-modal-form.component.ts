import { Component, inject, model } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SubtaskFormControlComponent } from './subtask-form-control/subtask-form-control.component';
import { CreateTaskDto, nullCreateTaskDto } from '../../../models/create-task.dto';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { tap } from 'rxjs';

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
  newTaskForm = this.generateNewTaskForm();
  newTask = model<CreateTaskDto>(nullCreateTaskDto());
  newTaskUpdates$ = this.newTaskForm.valueChanges.pipe(
    takeUntilDestroyed(),
    tap(value => this.newTask.set(value as CreateTaskDto))
  );

  constructor() {
    this.newTaskUpdates$.subscribe();
  }

  subtasksFormArray(): FormArray {
    return this.newTaskForm.get('subtasks') as FormArray;
  }

  private generateNewTaskForm(): FormGroup {
    return this.formBuilder.group({
      title: this.emptyNonNullableRequiredControl(),
      description: this.emptyNonNullableRequiredControl(),
      subtasks: this.formBuilder.array<string[]>([])
    });
  }

  private emptyNonNullableRequiredControl() {
    return new FormControl('', { nonNullable: true, validators: [Validators.required] });
  }
}
