import { Component, signal } from '@angular/core';
import { CompleteAllTasksButtonComponent } from './complete-all-tasks-button/complete-all-tasks-button.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';

@Component({
  selector: 'app-progress',
  imports: [
    CompleteAllTasksButtonComponent,
    ProgressBarComponent
  ],
  template: `
		<div class="progress-wrapper">
			<div class="progress-container">
				<div class="progress-header">
					<h2 class="progress-title">Overall Progress</h2>
					<span class="progress-count">{{ completedTasks() }} of {{ totalTasks() }} tasks completed</span>
				</div>
				<app-progress-bar/>
			</div>
			<app-complete-all-tasks-button/>
		</div>
  `,
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent {
  totalTasks = signal<number>(9);
  completedTasks = signal<number>(2);
}
