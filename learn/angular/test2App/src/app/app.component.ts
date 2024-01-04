import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ListingComponent } from './listing/listing.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { LISTING_ITEMS, ListingItem } from '../data/listing-item';
import { HeaderComponent } from './header/header.component';
import { CartItem } from '../data/cart-item';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ListingComponent, SearchBarComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'test2App';

  listingItems: ListingItem[] = LISTING_ITEMS;
  cartItems: CartItem[] = [];
  search(searchTerm: string) {
    console.log(searchTerm);

    this.listingItems = LISTING_ITEMS.filter(item => item.name.toLocaleLowerCase().includes(searchTerm));
    console.log(this.listingItems);
  }
}
