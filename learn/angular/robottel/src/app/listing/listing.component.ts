import { Component } from '@angular/core';
import { LISTING, Listing } from '../../data/mocks/listing';

@Component({
  selector: 'app-listing',
  standalone: true,
  imports: [],
  templateUrl: './listing.component.html',
  styleUrl: './listing.component.scss'
})
export class ListingComponent {
  public listing = LISTING;

  moreInfo(item: Listing) {
    alert(item.name);
  }
}
