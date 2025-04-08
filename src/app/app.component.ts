import { Component } from '@angular/core';
import { HeaderComponent } from './core/layout/header/header.component';
import { TaskGridComponent } from './tasks/components/task-grid/task-grid.component';
import { ProgressComponent } from './tasks/components/progress/progress.component';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    TaskGridComponent,
    ProgressComponent
  ],
  template: `
    <div class="container">
      <app-header/>
      <app-task-grid/>
      <app-progress/>
    </div>
  `,
  styles: [],
})
export class AppComponent {
  title = 'signals-course';
}
