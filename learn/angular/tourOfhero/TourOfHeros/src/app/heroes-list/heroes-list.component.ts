import { AfterViewChecked, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit, TrackByFunction } from '@angular/core';
import { HeroesService } from '../services/heros.service';
import { Hero } from '../models/heros';
import { Observable } from 'rxjs';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'hr-heroes-list',
  standalone: true,
  imports: [NgFor,NgIf, RouterModule, AsyncPipe],
  templateUrl: './heroes-list.component.html',
  styleUrl: './heroes-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroesListComponent implements OnInit, OnDestroy, AfterViewChecked{
  hero: Hero | undefined= undefined;
  onSelect(hero: Hero) {
    this.hero = hero;

  }
  heroes: Hero[] = [];
  heroes$: Observable<Hero[]>;
  constructor(heroesService: HeroesService, private change: ChangeDetectorRef) {
    this.heroes$ = heroesService.getHeroes()

  }
  ngAfterViewChecked(): void {

  }
  ngOnDestroy(): void {
     console.log("Destroy hero List");
  }
  ngOnInit(): void {
     console.log("Render hero List");
  }

  heroById(index: number, hero: Hero): number {
    return hero.id ?? -1;
  }


}
