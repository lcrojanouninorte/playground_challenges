import { Component } from '@angular/core';
import { TaskItemComponent } from '../task-item/task-item.component';
import { TaskListComponent } from '../task-list/task-list.component';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-today-task',
  standalone: true,
  imports: [TaskListComponent],
  templateUrl: './today-task.component.html',
  styleUrl: './today-task.component.css'
})
export class TodayTaskComponent {
  constructor(private log: LoggingService) {
    log.log("TodayTaskComponent constructor");

  }

}
