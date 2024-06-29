import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TASKS, Task } from '../../data/mooks/Task';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-tasks-description',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './tasks-description.component.html',
  styleUrl: './tasks-description.component.css'
})
export class TasksDescriptionComponent {

  task: Task = {
    id: 0,
    title: '',
    description: '',
    completed: false
  }
 @Input()
  set id(taskId: string){
    this.task = TASKS.find(task => task.id === Number(taskId))??this.task
  }

 @Output() onTaskUpdate : EventEmitter<Task> = new EventEmitter();
  updateTask() {
    this.onTaskUpdate.emit(this.task)
  }

  constructor(private route: ActivatedRoute) {

  }


}
