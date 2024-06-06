import { Routes } from '@angular/router';
import { TodayTaskComponent } from './today-task/today-task.component';

export const routes: Routes = [
  {
    path: '',
    component: TodayTaskComponent
  },
  {
    path: '**',
    component: TodayTaskComponent
  }
];
