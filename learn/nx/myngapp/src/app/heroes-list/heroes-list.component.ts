import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesMockService } from '../heroes';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-heroes-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './heroes-list.component.html',
  styleUrl: './heroes-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroesListComponent {
  heroes = inject(HeroesMockService);
  deleteHero(hero: number) {
    return hero
  }
}
