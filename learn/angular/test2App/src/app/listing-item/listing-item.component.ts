import { Component, Input } from '@angular/core';
import { ListingItem } from '../../data/listing-item';

@Component({
  selector: 'app-listing-item',
  standalone: true,
  imports: [],
  templateUrl: './listing-item.component.html',
  styleUrl: './listing-item.component.scss'
})

export class ListingItemComponent {
  @Input('item') item: ListingItem = {
    id: '',
    name: '',
    description: '',
    price: 0,
    stock: 0
  };

  addToCart(item: ListingItem) {
    console.log(item);
  }
}
