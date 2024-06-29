import { NgModule } from '@angular/core';
import { CommonModule, NgFor, NgForOf } from '@angular/common';
import  ProvidersListComponent  from './providers-list/providers-list.component';
import  ProvidersAddComponent  from './providers-add/providers-add.component';
import  ProvidersEditComponent  from './providers-edit/providers-edit.component';
import  ProvidersDeleteComponent  from './providers-delete/providers-delete.component';
import  ProvidersDetailsComponent  from './providers-details/providers-details.component';
import { ProviderItemComponent } from './provider-item/provider-item.component';
import { RouterModule } from '@angular/router';
import { routes } from './providers.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IProvider } from '../services/interfaces/providerFetcher.interface';
import { ProviderService } from '../services/provider.service';
import { MockProviderService } from '../services/mock-provider.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';


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
    NgForOf,
    NgFor,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [
    {provide: ProviderService, useClass: ProviderService},

  ]
})
export class ProvidersModule {

  providers: any;

}
