import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PROVIDERS } from '../../data/provider.mock';
import { Provider } from '../../models/providers';
import { Observable } from 'rxjs';
import { ProviderService } from '../../services/provider.service';

@Component({
  selector: 'mag-providers-details',
  templateUrl: './providers-details.component.html',
  styleUrl: './providers-details.component.css'
})
export default class ProvidersDetailsComponent implements OnInit{


  id!: string ;
  provider: Provider | undefined;
  provider$!: Observable<Provider | undefined> ;
  title = 'Providers Details';
  constructor(private serviceProvider: ProviderService, private route: ActivatedRoute){
    route.paramMap.subscribe(params => {
      console.log(params.get('id'));
      this.id = params.get('id') ?? "";
      this.provider$ = serviceProvider.getProvider(this.id);
    })
  }
  ngOnInit(): void {
      this.provider$.subscribe((provider: Provider | undefined) => {
        this.provider = provider;
      })
  }
}
