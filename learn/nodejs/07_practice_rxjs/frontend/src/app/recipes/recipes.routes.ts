import { Routes } from "@angular/router";

const routes: Routes = [
  { path: '', loadComponent: () => import('./recipes-list/recipes-list.component').then(m => m.RecipesListComponent)},
  {
    path: 'recipes',
  }
];
