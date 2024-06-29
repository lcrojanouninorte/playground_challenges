import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { TASKS, Task } from '../../data/mooks/Task';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {

  router = inject(Router);

  @Input() task: Task =  {
    id: 0,
    title: '',
    description: '',
    completed: false
  } ;
  @Output() deleteTask:EventEmitter<Task> = new EventEmitter();

  delete():void{
    this.deleteTask.emit(this.task)

  }
  goToTask(task:Task):void{
    this.router.navigate(['/tasks', task.id])
  }
  updateTask() {
   let task = TASKS.find(task => task.id === this.task.id)
   task ? task.completed = !task.completed : null
   this.task = task ?? this.task
  }
}
