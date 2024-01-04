import { Component, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent {
  @Output() searchTerm = new EventEmitter();
  constructor() { }

  searchInput : FormControl  = new FormControl() as FormControl<string>;


  search() {
    console.log(this.searchInput.value);
    this.searchTerm.emit(this.searchInput.value);
  }


}
