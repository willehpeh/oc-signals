import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  imports: [],
  template: `
		<div class="progress-wrapper">
			<div class="progress-container">
				<div class="progress-header">
					<h2 class="progress-title">Overall Progress</h2>
					<span class="progress-count">2 of 9 tasks completed</span>
				</div>
				<div class="progress-bar">
					<div class="progress-fill" style="width: 22%"></div>
				</div>
			</div>
			<button class="complete-all-button">
				<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
						 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
					<circle cx="12" cy="12" r="10"/>
					<path d="m9 12 2 2 4-4"/>
				</svg>
				Complete All Tasks
			</button>
		</div>
  `,
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent {

}
