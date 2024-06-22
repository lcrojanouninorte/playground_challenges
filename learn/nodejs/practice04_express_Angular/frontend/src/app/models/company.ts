import { FormControl } from "@angular/forms";

export type Company = {

    company_name: string;
    address: string;
    address2: string;
    city: string;
    state: string;
    postal_code: string;
    phone: string;
    email: string;
    description: string;
    tagline: string;

}

export type CompanyFormControls = {
  [K in keyof Company]: FormControl<Company[K]>;
};
