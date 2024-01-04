import { Component, Input } from '@angular/core';
import { ListingItemComponent } from '../listing-item/listing-item.component';
import { LISTING_ITEMS, ListingItem } from '../../data/listing-item';
import { CartItem } from '../../data/cart-item';

@Component({
  selector: 'app-listing',
  standalone: true,
  imports: [ListingItemComponent],
  templateUrl: './listing.component.html',
  styleUrl: './listing.component.scss'
})
export class ListingComponent {
  @Input() listingItems:ListingItem[] = LISTING_ITEMS;
  @Input() cartItems: CartItem[] = [];
  addToCart(item: ListingItem) {
    //TODO: update cart instead of creating new item
    let cartItem: CartItem = {
      id: item.id,
      name: item.name,
      description: item.description,
      price: item.price,
      stock: item.stock,
      quantity: 1
    }
    this.cartItems.push(cartItem);
  }
}
