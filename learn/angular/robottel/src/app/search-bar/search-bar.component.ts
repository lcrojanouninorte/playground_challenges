import { Component, ViewChild } from '@angular/core';
import { Form, FormGroup, FormsModule } from '@angular/forms';
@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent {
   searchText: string = '';

   onSubmit() {
     alert(this.searchText);
   }
}
