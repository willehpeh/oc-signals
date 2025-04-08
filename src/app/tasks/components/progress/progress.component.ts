import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  imports: [],
  template: `
		<div class="progress-container">
			<div class="progress-header">
				<h2 class="progress-title">Overall Progress</h2>
				<span class="progress-count">2 of 9 tasks completed</span>
			</div>
			<div class="progress-bar">
				<div class="progress-fill" style="width: 22%"></div>
			</div>
		</div>
  `,
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent {

}
