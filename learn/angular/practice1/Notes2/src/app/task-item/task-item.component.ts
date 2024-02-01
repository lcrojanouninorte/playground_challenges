import { Component, Input } from '@angular/core';
import { Task } from '../../data/mocks/Task';
@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
  @Input() task: Task =  {
    id: 0,
    title: '',
    description: '',
    completed: false
  } ;

}
