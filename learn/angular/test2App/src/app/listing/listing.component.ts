import { Component, Input } from '@angular/core';
import { ListingItemComponent } from '../listing-item/listing-item.component';
import { LISTING_ITEMS, ListingItem } from '../../data/listing-item';

@Component({
  selector: 'app-listing',
  standalone: true,
  imports: [ListingItemComponent],
  templateUrl: './listing.component.html',
  styleUrl: './listing.component.scss'
})
export class ListingComponent {
  @Input() listingItems:ListingItem[] = LISTING_ITEMS;
}
