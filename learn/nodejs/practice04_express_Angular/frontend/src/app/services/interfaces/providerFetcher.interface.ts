import { Observable } from "rxjs";
import { Provider } from "../../models/providers";



export abstract class IProvider {

  abstract addProvider(provider: Provider): Observable<Provider | null>
  abstract getProvider(id: string): Observable<Provider | undefined>;
  abstract getProviders(): Observable<Provider[]>;
  abstract updateProvider(provider: Provider, id: string): Observable<Provider>;
  abstract deleteProvider(id: string): Observable<Provider | null>;
  constructor() { }
}
