import { Component, computed, input } from '@angular/core';
import { FormArray, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-subtask-form-control',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './subtask-form-control.component.html',
  styleUrls: ['./subtask-form-control.component.scss'],
})
export class SubtaskFormControlComponent {
  formArray = input.required<FormArray>();
  controls = computed(() => this.formArray().controls as FormControl[]);

  onAddSubtask() {
    this.formArray().push(new FormControl(''));
  }

  onRemoveSubtask(index: number) {
    this.formArray().removeAt(index);
  }
}
