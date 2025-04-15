import { Component, input } from '@angular/core';
import { Task } from '../../../models/task';

@Component({
  selector: 'app-task-card-header',
  imports: [],
  template: `
		<div class="task-card-header" [class.completed]="task().completed">
			<h2 class="task-title">{{ task().title }}</h2>
			<div class="task-actions">
				@if (task().completed) {
					<button class="task-action-button cancel">
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
								 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<circle cx="12" cy="12" r="10"/>
							<path d="M15 9l-6 6"/>
							<path d="M9 9l6 6"/>
						</svg>
					</button>
				} @else {
					<button class="task-action-button complete">
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
								 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<circle cx="12" cy="12" r="10"/>
							<path d="m9 12 2 2 4-4"/>
						</svg>
					</button>
				}
				<button class="task-action-button delete">
					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
							 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
						<path d="M3 6h18"/>
						<path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/>
						<path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
						<line x1="10" y1="11" x2="10" y2="17"/>
						<line x1="14" y1="11" x2="14" y2="17"/>
					</svg>
				</button>
			</div>
		</div>
		<p class="task-description">{{ task().description }}</p>
  `,
  styleUrls: ['./task-card-header.component.scss']
})
export class TaskCardHeaderComponent {
  task = input.required<Task>();
}
