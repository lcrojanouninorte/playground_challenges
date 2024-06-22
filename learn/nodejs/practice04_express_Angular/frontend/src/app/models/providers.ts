import { FormControl, FormGroup } from "@angular/forms";
import { Company, CompanyFormControls } from "./company";

export type Provider = {
    id?:  any;
    firstname: string;
    lastname: string;
    position: string;
    company: Company

}

export type ProviderFormControls = {
  [K in keyof Provider]: K extends 'company' ? FormGroup<CompanyFormControls> : FormControl<Provider[K]>;
}
