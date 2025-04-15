import { Component } from '@angular/core';

@Component({
  selector: 'app-subtasks-list-item',
  imports: [],
  template: `
		<div class="subtask-item">
			<input type="checkbox" [id]="title" class="subtask-checkbox" [checked]="completed" />
			<label [for]="title" class="subtask-label">{{ title }}</label>
		</div>
  `,
  styleUrls: ['subtasks-list-item.component.scss']
})
export class SubtasksListItemComponent {
  title = 'Review current docs';
  completed = true;
}
