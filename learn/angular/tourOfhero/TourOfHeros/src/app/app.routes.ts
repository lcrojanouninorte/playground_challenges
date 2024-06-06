import { Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroFormComponent } from './hero-form/hero-form.component';

export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    component: HeroesComponent,
    path: 'heroes'
  },
  {
    component: DashboardComponent,
    path: 'dashboard'
  },
  {
    path: '',
    component: HeroFormComponent,
    outlet: 'edit'
  },
  {
    path: 'edit/:id',
    component: HeroFormComponent,
    outlet: 'edit'
  }
  ,



];
