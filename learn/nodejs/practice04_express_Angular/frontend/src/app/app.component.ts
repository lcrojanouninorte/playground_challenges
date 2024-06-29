import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeModule } from './theme/theme.module';

@Component({
  selector: 'mag-root',
  standalone: true,
  imports: [RouterOutlet, ThemeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'providers';
}
