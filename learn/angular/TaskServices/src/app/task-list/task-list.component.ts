import { Component } from '@angular/core';
import { TaskItemComponent } from '../task-item/task-item.component';
import { Task } from '../../data/task';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [TaskItemComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  tasks: Task[] = [];
  constructor(private tasksService: TasksService) {
      this.tasksService.getTasks().subscribe(data => this.tasks = data);
  }
}
