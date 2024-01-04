import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ListingItem } from '../../data/listing-item';
import { CartItem } from '../../data/cart-item';

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

  @Output() addItem = new EventEmitter<CartItem>();

  addToCart(item: CartItem) {
    this.addItem.emit(item);
  }
}
