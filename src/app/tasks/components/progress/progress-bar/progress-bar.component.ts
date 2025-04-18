import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  imports: [],
  template: `
		<div class="progress-bar">
			<div class="progress-fill" [style.width]="progressBarWidth()"></div>
		</div>
  `,
  styles: `
    .progress-bar {
      height: 0.5rem;
      background-color: var(--progress-bg);
      border-radius: 9999px;
      overflow: hidden;
    }

    .progress-fill {
      height: 100%;
      background: linear-gradient(to right, #22d3ee, #a855f7);
      border-radius: 9999px;
      transition: width 0.3s ease;
    }
  `
})
export class ProgressBarComponent {
  progressPercentage = input.required<number>();
  progressBarWidth = computed(() => `${this.progressPercentage()}%`);
}
