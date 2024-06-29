import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, of, switchMap, tap, timeInterval, timeout } from 'rxjs';
import { Provider } from '../models/providers';
import { IProvider } from './interfaces/providerFetcher.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProviderService implements IProvider {

  readonly providers$: BehaviorSubject<Provider[]> = new BehaviorSubject<Provider[]>([]);
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  addProvider(provider: Provider): Observable<Provider | null> {
    return  this.http.post<Provider>(`${this.apiUrl}/providers/add`,provider).pipe(
          timeout(5000)
        ,tap((provider) => {
          this.providers$.value.push(provider);
          this.providers$.next(this.providers$.value);
        }))


  }
   getProvider(id: string): Observable<Provider | undefined> {
    console.log(id);
    return this.http.get<Provider>(`${this.apiUrl}/providers/info/${id}`  ).pipe(
      timeout(5000),
      tap((provider) => {
        this.providers$.value.push(provider);
        this.providers$.next(this.providers$.value);
      }));
  }
  getProviders(): Observable<Provider[]> {
    return this.http.get<Provider[]>(`${this.apiUrl}/providers`).pipe(
      timeout(5000),
      tap((providers) => {
        this.providers$.next(providers);
      }));
  }
  updateProvider(provider: Provider, id: string): Observable<Provider> {
    return this.http.post<Provider>(`${this.apiUrl}/providers/update/${id}`, provider).pipe(
      timeout(5000),
      tap((provider) => {
        this.providers$.value.push(provider);
        this.providers$.next(this.providers$.value);
      }));
  }
   deleteProvider(id: string): Observable<Provider | null> {
    return this.http.get<Provider>(`${this.apiUrl}/providers/delete/${id}`).pipe(
      timeout(5000),
      tap((provider) => {
        this.providers$.value.splice(this.providers$.value.indexOf(provider), 1);
        this.providers$.next(this.providers$.value);
      }));
  }
}
