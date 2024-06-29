import { AfterViewChecked, ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'hr-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements AfterViewChecked{
  title = 'TourOfHeros';
  ngAfterViewChecked(): void {
    console.log("Heroes App Checked")
  }
}
