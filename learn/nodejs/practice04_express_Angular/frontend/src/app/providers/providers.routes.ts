import { Route } from "@angular/router";
import  ProvidersListComponent  from "./providers-list/providers-list.component";
import  ProvidersDetailsComponent  from "./providers-details/providers-details.component";
import  ProvidersAddComponent  from "./providers-add/providers-add.component";
import  ProvidersEditComponent  from "./providers-edit/providers-edit.component";
import  ProvidersDeleteComponent  from "./providers-delete/providers-delete.component";

export const routes: Route[] = [
  { path: '', loadComponent: () => ProvidersListComponent},
  { path: 'details', component:  ProvidersDetailsComponent },
  { path: 'add', component: ProvidersAddComponent },
  { path: 'edit', component: ProvidersEditComponent },
  { path: 'delete', component: ProvidersDeleteComponent }

]
