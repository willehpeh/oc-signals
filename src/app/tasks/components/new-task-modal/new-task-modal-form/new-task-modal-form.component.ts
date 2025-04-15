import { Component } from '@angular/core';

@Component({
  selector: 'app-new-task-modal-form',
  imports: [],
  template: `
		<form class="modal-form">
			<div class="form-group">
				<label for="taskTitle" class="form-label">Task Title</label>
				<input type="text" id="taskTitle" class="form-input" placeholder="Enter task title" required>
			</div>
			<div class="form-group">
				<label for="taskDescription" class="form-label">Description</label>
				<textarea id="taskDescription" class="form-textarea" placeholder="Enter task description" required></textarea>
			</div>
			<div class="form-group">
				<label class="form-label">Subtasks</label>
				<div class="subtasks-container">
					<div class="subtask-input-group">
						<input type="text" class="form-input subtask-input" placeholder="Enter subtask">
						<button type="button" class="remove-subtask-button">
							<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
									 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
								<line x1="18" y1="6" x2="6" y2="18"/>
								<line x1="6" y1="6" x2="18" y2="18"/>
							</svg>
						</button>
					</div>
				</div>
				<button type="button" class="add-subtask-button">
					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
							 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
						<circle cx="12" cy="12" r="10"/>
						<line x1="12" y1="8" x2="12" y2="16"/>
						<line x1="8" y1="12" x2="16" y2="12"/>
					</svg>
					<span>Add Subtask</span>
				</button>
			</div>
		</form>
  `,
  styles: `
    .modal-form {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .form-group {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .form-label {
      color: var(--text-secondary);
      font-size: 0.875rem;
    }

    .form-input,
    .form-textarea {
      padding: 0.75rem;
      background-color: var(--bg-color);
      border: 1px solid var(--border-color);
      border-radius: 0.5rem;
      color: var(--text-primary);
      font-size: 1rem;
      transition: border-color 0.2s ease;
    }

    .form-input:focus,
    .form-textarea:focus {
      outline: none;
      border-color: var(--checkbox-gradient-from);
    }

    .form-textarea {
      resize: vertical;
      min-height: 100px;
    }

    .subtasks-container {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .subtask-input-group {
      display: flex;
      gap: 0.5rem;
    }

    .subtask-input {
      flex: 1;
    }

    .remove-subtask-button {
      padding: 0.75rem;
      background-color: var(--delete-hover);
      border: none;
      border-radius: 0.5rem;
      color: var(--delete-color);
      cursor: pointer;
      transition: all 0.2s ease;
    }

    .remove-subtask-button:hover {
      background-color: var(--delete-color);
      color: var(--text-primary);
    }

    .add-subtask-button {
      margin-top: 0.5rem;
      padding: 0.5rem;
      background: none;
      border: 1px dashed var(--border-color);
      border-radius: 0.5rem;
      color: var(--text-secondary);
      cursor: pointer;
      transition: all 0.2s ease;
      svg, span {
        display: block;
      }
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
    }

    .add-subtask-button:hover {
      border-color: var(--checkbox-gradient-from);
      color: var(--text-primary);
    }
  `
})
export class NewTaskModalFormComponent {
}
