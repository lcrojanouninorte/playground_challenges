 ;
import { Route } from "@angular/router";
import { TasksListComponent } from "./tasks-list/tasks-list.component";


export const routes:Route[] = [
  {
    path: '/tasks', component: TasksListComponent
  },
  {
    path: '/tasks/:id', component: TasksListComponent
  },
  {
    path: '', redirectTo: '/tasks', pathMatch: 'full'
  },

]
