import { AfterViewChecked, ChangeDetectionStrategy, Component } from '@angular/core';
import { HeroesListComponent } from '../heroes-list/heroes-list.component';

@Component({
  selector: 'hr-heros',
  standalone: true,
  imports: [HeroesListComponent],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroesComponent implements AfterViewChecked{

  constructor() {
  }

  ngAfterViewChecked(): void {
    console.log("Heroes component Checked")
  }

}
