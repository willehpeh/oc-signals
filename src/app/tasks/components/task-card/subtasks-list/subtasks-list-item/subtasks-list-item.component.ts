import { Component } from '@angular/core';

@Component({
  selector: 'app-subtasks-list-item',
  imports: [],
  template: `
		<div class="subtask-item">
			<input type="checkbox" id="task-2-1" class="subtask-checkbox" checked>
			<label for="task-2-1" class="subtask-label">Review current docs</label>
		</div>
  `,
  styleUrls: ['subtasks-list-item.component.scss']
})
export class SubtasksListItemComponent {

}
