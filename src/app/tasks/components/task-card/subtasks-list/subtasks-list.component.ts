import { Component, input } from '@angular/core';
import { SubtasksListItemComponent } from './subtasks-list-item/subtasks-list-item.component';
import { Subtask } from '../../../models/subtask';

@Component({
  selector: 'app-subtasks-list',
  imports: [
    SubtasksListItemComponent
  ],
  template: `
    <div class="subtasks-list">
			@for (subtask of subtasks(); track subtask.title) {
        <app-subtasks-list-item [subtask]="subtask"/>
			}
    </div>
  `,
  styles: `
    .subtasks-list {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      padding-top: 0.5rem;
    }
  `
})
export class SubtasksListComponent {
  subtasks = input<Subtask[]>([]);
}
