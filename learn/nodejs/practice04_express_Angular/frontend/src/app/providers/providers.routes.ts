import { Route } from "@angular/router";
import  ProvidersListComponent  from "./providers-list/providers-list.component";
import  ProvidersDetailsComponent  from "./providers-details/providers-details.component";
import  ProvidersAddComponent  from "./providers-add/providers-add.component";
import  ProvidersEditComponent  from "./providers-edit/providers-edit.component";
import  ProvidersDeleteComponent  from "./providers-delete/providers-delete.component";

export const routes: Route[] = [
  { path: '', component: ProvidersListComponent},
  { path: 'info/:id', component:  ProvidersDetailsComponent },
  { path: 'addprovider', component: ProvidersAddComponent },
  { path: 'edit/:id', component: ProvidersEditComponent },
  { path: 'delete/:id', component: ProvidersDeleteComponent }

]
