import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RecipesFilterComponent } from './recipes-filter/recipes-filter.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { RouterModule } from '@angular/router';
import routes  from './home.routes';



@NgModule({
  declarations: [
    HomeComponent,
    RecipesFilterComponent,
    RecipesListComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
