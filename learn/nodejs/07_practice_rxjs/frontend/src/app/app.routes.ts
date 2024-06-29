import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {

    path: 'recipes', loadChildren: () => import('./recipes/recipes.module').then(m => m.RecipesModule)
  }
];
