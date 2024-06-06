import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeroesListComponent } from './heroes-list/heroes-list.component';

@Component({
  standalone: true,
  imports: [RouterModule, HeroesListComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush ,
})
export class AppComponent {
  title = 'myngapp';
}
