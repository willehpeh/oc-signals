import { Component, input } from '@angular/core';
import { Subtask } from '../../../../models/subtask';

@Component({
  selector: 'app-subtasks-list-item',
  imports: [],
  template: `
    @let title = subtask().title;
    @let completed = subtask().completed;
    
		<div class="subtask-item">
			<input type="checkbox" [id]="title" class="subtask-checkbox" [checked]="completed" />
			<label [for]="title" class="subtask-label">{{ title }}</label>
		</div>
  `,
  styleUrls: ['subtasks-list-item.component.scss']
})
export class SubtasksListItemComponent {
  subtask = input.required<Subtask>();
}
