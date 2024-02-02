import { Component, Input, inject } from '@angular/core';
import { TaskItemComponent } from '../task-item/task-item.component';
import { TASKS, Task } from '../../data/mooks/Task';
import { FormsModule, } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  imports: [TaskItemComponent, FormsModule],
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.css'
})
export class TasksListComponent {

  tasks: Task[] = TASKS;

  //@Input() tasks: Task[] = [];
  task:string = '';

  constructor() {

  }

  addTask(): void{
    this.tasks.push({
      id: this.tasks.length + 1,
      title: this.task,
      description: '',
      completed: false
    })
  }
  deleteTask(task: Task):void {
    this.tasks.splice(this.tasks.indexOf(task), 1)
  }


}
