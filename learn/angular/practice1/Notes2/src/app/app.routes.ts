
import { Route } from "@angular/router";
import { TasksListComponent } from "./tasks-list/tasks-list.component";
import { TasksDescriptionComponent } from "./tasks-description/tasks-description.component";


export const routes:Route[] = [
  {
    path: 'tasks', component: TasksListComponent
  },
  {
    path: 'tasks/:id', component: TasksDescriptionComponent
  },
  {
    path: '', redirectTo: 'tasks', pathMatch: 'full'
  },

]
