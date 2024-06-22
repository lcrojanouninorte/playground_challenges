import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Provider } from '../../models/providers';
import { MockProviderService } from '../../services/mock-provider.service';
import { Observable } from 'rxjs';
import { ProviderService } from '../../services/provider.service';

@Component({
  selector: 'mag-providers-edit',
  templateUrl: './providers-edit.component.html',
  styleUrl: './providers-edit.component.css'
})
export default class ProvidersEditComponent implements OnInit{
  title = 'Providers Edit';
  route = inject(ActivatedRoute);
  serviceProvider: ProviderService = inject(ProviderService);
  id!: string ;
  provider: Provider | undefined;
  provider$: Observable<Provider | undefined> | undefined;
  constructor() {
    this.route.paramMap.subscribe(params => {
      this.id =params.get('id') ?? "";
      this.provider$ = this.serviceProvider.getProvider(this.id);
    });
  }
  ngOnInit(): void {
   if(this.provider$ === undefined) return;
    this.provider$.subscribe((provider: Provider | undefined) => {
      this.provider = provider;
    });
  }

  update(provider: Provider){
    if(provider) {
      this.serviceProvider.updateProvider(provider, this.id)
        .subscribe((provider: Provider) => {
          alert(`Updated provider: ${provider.id}`);
          return provider;
        })
    }else{
      alert('Error');
    }

  }

}
