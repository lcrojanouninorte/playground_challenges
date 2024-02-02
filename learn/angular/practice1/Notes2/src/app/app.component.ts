import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { CurrentUserComponent } from './current-user/current-user.component';
import { TASKS, Task } from '../data/mooks/Task';
import { routes } from './app.routes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, RouterModule, TasksListComponent, CurrentUserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

})
export class AppComponent {
  title = 'Notes2';
}
