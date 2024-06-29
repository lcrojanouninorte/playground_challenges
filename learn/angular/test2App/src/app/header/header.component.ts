import { Component, Input } from '@angular/core';
import { CartComponent } from '../cart/cart.component';
import { CartItem } from '../../data/cart-item';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CartComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
isOpen: boolean = false;
@Input() cartItems: CartItem[] = [];
  openCart() {
    this.isOpen = !this.isOpen;
  }
}
