import { Component } from '@angular/core';
import { TaskCardHeaderComponent } from './task-card-header/task-card-header.component';

@Component({
  selector: 'app-task-card',
  imports: [
    TaskCardHeaderComponent
  ],
  template: `
		<div class="task-card">
			<app-task-card-header/>
		</div>
  `,
  styleUrls: ['./task-card.component.scss']
})
export class TaskCardComponent {
}
