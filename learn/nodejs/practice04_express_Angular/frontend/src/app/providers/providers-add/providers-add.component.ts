import { Component, OnInit } from '@angular/core';
import { Provider, ProviderFormControls } from '../../models/providers';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {   CompanyFormControls } from '../../models/company';
 import { ProviderService } from '../../services/provider.service';

@Component({
  selector: 'mag-providers-add',
  templateUrl: './providers-add.component.html',
  styleUrl: './providers-add.component.css'
})
export default class ProvidersAddComponent implements OnInit {



  companyForm: FormGroup<CompanyFormControls> = new FormGroup({
    company_name: new FormControl(''),
    address: new FormControl(''),
    address2: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(''),
    postal_code: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl(''),
    description: new FormControl(''),
    tagline: new FormControl('')
  } as CompanyFormControls);

  providerForm: FormGroup<ProviderFormControls> = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    position: new FormControl(''),
    company: this.companyForm
  } as ProviderFormControls); ;
  title = 'Providers Add';

  constructor(private providerService: ProviderService) {

  }


  ngOnInit(): void {

  }

  add(){
    const provider: Provider = this.providerForm.value as Provider;

    this.providerService.addProvider(provider).subscribe((provider: Provider | null) => {
      alert(`Added provider: ${provider?.id}`);
      return provider;
    })
  }

}
