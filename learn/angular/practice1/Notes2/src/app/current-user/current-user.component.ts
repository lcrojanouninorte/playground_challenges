import { Component } from '@angular/core';

@Component({
  selector: 'app-current-user',
  standalone: true,
  imports: [],
  templateUrl: './current-user.component.html',
  styleUrl: './current-user.component.css'
})
export class CurrentUserComponent {
  currentUser = {
    name: 'John Doe',
    image: 'https://picsum.photos/200'
  };

}
