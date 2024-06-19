import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] =[
  { path: '', component: ContactFormComponent }
]

@NgModule({
  declarations: [
    ContactFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ContactModule { }
