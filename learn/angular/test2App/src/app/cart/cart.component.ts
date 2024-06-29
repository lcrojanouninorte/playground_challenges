import { Component, Input } from '@angular/core';
import { ListingItem } from '../../data/listing-item';
import { CartItemComponent } from '../cart-item/cart-item.component';
import { CartItem } from '../../data/cart-item';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CartItemComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  @Input() cartItems: CartItem[] = [];
  @Input() isOpen: boolean = false;
}
