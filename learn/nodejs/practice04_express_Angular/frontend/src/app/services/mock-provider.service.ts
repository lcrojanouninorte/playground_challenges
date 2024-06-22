import { Injectable } from '@angular/core';
import { PROVIDERS } from '../data/provider.mock';
import { Provider } from '../models/providers';
import { Observable, of } from 'rxjs';
import { IProvider } from './interfaces/providerFetcher.interface';

@Injectable({
  providedIn: 'root'
})
export class MockProviderService implements IProvider {
  deleteProvider(id: string) : Observable<Provider | null>{
    const provider = this.providers.find(provider => provider.id == id);
    if(provider) {this.providers.splice(this.providers.indexOf(provider), 1)}else
    {return of(null)};
    return of(provider);

  }
  addProvider(provider: Provider): Observable<Provider | null> {
    provider.id = (this.providers.length + 1).toString();
    if(this.providers.push(provider) > 0) return of(provider);
    return of(null);
  }
  providers: Provider[] = PROVIDERS;
  updateProvider(provider: Provider, id: string): Observable<Provider> {
    const index = this.providers.findIndex(provider => provider.id == id);
    provider.id = id;
    this.providers[index] = provider;
    return of(provider);
  }
  getProvider(id: string): Observable<Provider | undefined > {
    return of(this.providers.find(provider => provider.id == id));
  }
  getProviders(): Observable<Provider[]> {
    return of(this.providers);
  }

  constructor() { }
}
