import { Component, Input } from '@angular/core';
import { ListingItem } from '../../data/listing-item';
import { CartItem } from '../../data/cart-item';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss',
})
export class CartItemComponent {
  @Input() item: CartItem = {
    id: '',
    name: '',
    description: '',
    price: 0,
    stock: 0,
    quantity: 0,
  };

  increaseQuantity(arg0: ListingItem) {}
  removeFromCart(arg0: ListingItem) {}
}
