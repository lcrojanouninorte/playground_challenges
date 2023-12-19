import { Component } from '@angular/core';
import { FILTERS, Filter } from '../../data/mocks/filter';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {
 public filters: Filter[] = FILTERS;


isVisible(filter: Filter) {
  filter.isVisible = !filter.isVisible
}
toggleVisibility(filter: Filter) {
  filter.isVisible = !filter.isVisible

}

}
