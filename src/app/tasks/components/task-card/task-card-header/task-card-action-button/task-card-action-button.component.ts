import { Component, computed, input, TemplateRef, viewChild } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-task-card-action-button',
  imports: [
    NgTemplateOutlet
  ],
  templateUrl: './task-card-action-button.component.html',
  styleUrls: ['./task-card-action-button.component.scss']
})
export class TaskCardActionButtonComponent {
  cancelIcon = viewChild.required<TemplateRef<unknown>>('cancelIcon');
  completeIcon = viewChild.required<TemplateRef<unknown>>('completeIcon');
  deleteIcon = viewChild.required<TemplateRef<unknown>>('deleteIcon');
  action = input.required<'cancel' | 'complete' | 'delete'>();
  iconTemplate = computed(() => {
    switch (this.action()) {
      case 'cancel':
        return this.cancelIcon();
      case 'complete':
        return this.completeIcon();
      case 'delete':
        return this.deleteIcon();
    }
  });
}
