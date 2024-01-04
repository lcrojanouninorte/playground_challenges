import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HighlightParagraphComponent } from './highlight-paragraph/highlight-paragraph.component';
import { ListingComponent } from './listing/listing.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FilterComponent } from './filter/filter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent, HighlightParagraphComponent, ListingComponent, SearchBarComponent, FilterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'robottel';
}
