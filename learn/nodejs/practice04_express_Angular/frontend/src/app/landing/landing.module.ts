import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import HomeComponent from './home/home.component';
import { RouterModule } from '@angular/router';
import routes from './providers.routes';



@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]

})
export class LandingModule { }
