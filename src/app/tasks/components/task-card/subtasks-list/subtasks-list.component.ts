import { Component } from '@angular/core';
import { SubtasksListItemComponent } from './subtasks-list-item/subtasks-list-item.component';

@Component({
  selector: 'app-subtasks-list',
  imports: [
    SubtasksListItemComponent
  ],
  template: `
    <div class="subtasks-list">
			@for (subtask of subtasks; track subtask.title) {
        <app-subtasks-list-item/>
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
  subtasks = [
    { title: 'Research client background', completed: true },
    { title: 'Outline proposal structure', completed: true },
    { title: 'Write first draft', completed: false },
    { title: 'Review with team', completed: false }
  ];
}
