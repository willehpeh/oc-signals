import { Component, input, output } from '@angular/core';
import { Subtask } from '../../../../models/subtask';

@Component({
  selector: 'app-subtasks-list-item',
  imports: [],
  template: `
		@let title = subtask().title;
		@let completed = subtask().completed;

		<div class="subtask-item">
			<input type="checkbox" 
             [id]="title" class="subtask-checkbox" 
             [checked]="completed"
						 (change)="onSubtaskToggle($event)"/>
			<label [for]="title" class="subtask-label">{{ title }}</label>
		</div>
  `,
  styleUrls: ['subtasks-list-item.component.scss']
})
export class SubtasksListItemComponent {
  subtask = input.required<Subtask>();
  subtaskToggle = output<boolean>();

  onSubtaskToggle(checkboxEvent: Event) {
    const checked = (checkboxEvent.target as HTMLInputElement).checked;
    this.subtaskToggle.emit(checked);
  }
}
