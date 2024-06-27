import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default/default.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';



@NgModule({
  declarations: [
    DefaultComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule, RouterModule, ButtonModule
  ],
  exports: [
    DefaultComponent
  ]
})
export class ThemeModule { }
