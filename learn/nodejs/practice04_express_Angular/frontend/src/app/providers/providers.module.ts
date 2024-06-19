import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import  ProvidersListComponent  from './providers-list/providers-list.component';
import  ProvidersAddComponent  from './providers-add/providers-add.component';
import  ProvidersEditComponent  from './providers-edit/providers-edit.component';
import  ProvidersDeleteComponent  from './providers-delete/providers-delete.component';
import  ProvidersDetailsComponent  from './providers-details/providers-details.component';
import { ProviderItemComponent } from './provider-item/provider-item.component';
import { RouterModule } from '@angular/router';
import { routes } from './providers.routes';


@NgModule({
  declarations: [
    ProvidersListComponent,
    ProvidersAddComponent,
    ProvidersEditComponent,
    ProvidersDeleteComponent,
    ProvidersDetailsComponent,
    ProviderItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ProvidersModule { }
