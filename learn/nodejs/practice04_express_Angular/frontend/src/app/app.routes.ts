import { Routes } from '@angular/router';
import { ProvidersModule } from './providers/providers.module';
import { LandingModule } from './landing/landing.module';
import { ContactModule } from './contact/contact.module';
import { AuthModule } from './auth/auth.module';
import  NotFoundComponent from './errors/not-found/not-found.component';

export const routes: Routes = [

  {
    path: '',
    loadChildren: () => import('./landing/landing.module').then(m => m.LandingModule)
  },
  {
    path: 'providers',
    loadChildren: () => import('./providers/providers.module').then(m => m.ProvidersModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)
  },
  {
    path: '',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '404',  loadComponent: () => NotFoundComponent
  },
  {
    path: '**',
    redirectTo: '404'
  }
];
