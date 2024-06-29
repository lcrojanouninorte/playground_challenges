import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DefaultComponent } from './default/default.component';
import { DarkComponent } from './dark/dark.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    DefaultComponent,
    DarkComponent,

  ],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [

    DefaultComponent,
    DarkComponent
  ]
})
export class ThemeModule { }
