import { Component, input } from '@angular/core';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-subtask-form-control',
  imports: [],
  templateUrl: './subtask-form-control.component.html',
  styleUrls: ['./subtask-form-control.component.scss'],
})
export class SubtaskFormControlComponent {
  formArray = input.required<FormArray>();
}
