import { Component, output } from '@angular/core';

@Component({
  selector: 'app-new-task-modal-header',
  imports: [],
  template: `
		<div class="modal-header">
			<h2 class="modal-title">Create New Task</h2>
			<button class="modal-close" (click)="onClose()">
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
						 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
					<line x1="18" y1="6" x2="6" y2="18"/>
					<line x1="6" y1="6" x2="18" y2="18"/>
				</svg>
			</button>
		</div>
  `,
  styles: `
    .modal-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1.5rem;
    }

    .modal-title {
      font-size: 1.5rem;
      font-weight: 600;
      color: var(--text-primary);
    }

    .modal-close {
      background: none;
      border: none;
      color: var(--text-secondary);
      cursor: pointer;
      padding: 0.5rem;
      transition: color 0.2s ease;
    }

    .modal-close:hover {
      color: var(--text-primary);
    }
  `
})
export class NewTaskModalHeaderComponent {
  close = output<void>();
  onClose() {
    this.close.emit();
  }
}
