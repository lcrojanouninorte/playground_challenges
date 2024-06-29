import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
 import { Provider } from '../../models/providers';
import { ProviderService } from '../../services/provider.service';

@Component({
  selector: 'mag-providers-delete',
  templateUrl: './providers-delete.component.html',
  styleUrl: './providers-delete.component.css'
})
export default class ProvidersDeleteComponent implements OnInit{
  title = 'Providers Delete';
  id!: string ;
  constructor(private route: ActivatedRoute, private serviceProvider: ProviderService){
    route.paramMap.subscribe((params)=>{
      this.id = params.get('id') ?? "";
    })
  }
  ngOnInit(): void {
    this.serviceProvider.deleteProvider(this.id).subscribe((provider: Provider | null) => {
      console.log(provider);
    })
  }


  delete(id: number){
    alert(`Deleted provider: ${id}`);
  }
}
