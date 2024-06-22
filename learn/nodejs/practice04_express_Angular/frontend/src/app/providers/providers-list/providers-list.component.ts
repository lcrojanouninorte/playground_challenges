import { Component, OnInit } from '@angular/core';
import { Provider } from '../../models/providers';
import { Observable } from 'rxjs';
import { ProviderService } from '../../services/provider.service';

@Component({
  selector: 'mag-providers-list',
  templateUrl: './providers-list.component.html',
  styleUrl: './providers-list.component.css'
})
export default class ProvidersListComponent implements OnInit {
  providers: Provider[] = [];
  providers$: Observable<Provider[]> | undefined;
  constructor(private providerService: ProviderService){
    this.providers$ = this.providerService.getProviders()
  }
  ngOnInit(): void {
    if(this.providers$ === undefined) return
    this.providers$.subscribe((providers: Provider[]) => {
      this.providers = providers;
    });
  }



  trackByfn = (index: number, item: any) => item._id;

}
