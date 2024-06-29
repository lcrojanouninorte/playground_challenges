import { AfterViewChecked, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Hero } from '../models/heros';
import { catchError, of} from 'rxjs';
import { HeroesService } from '../services/heros.service';
import { NgFor, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'hr-dashboard',
  standalone: true,
  imports: [NgFor,NgIf, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit, OnDestroy, AfterViewChecked{
  hero: Hero | undefined= undefined;
onClick(hero: Hero) {
  this.hero = hero;
}
  topHeroes: Hero[] = [];
  topHeroes$ = this.heroesService.getTopHeroes();
  constructor(private heroesService: HeroesService, private change: ChangeDetectorRef) {

    this.topHeroes$ = this.heroesService.getTopHeroes()
      .pipe(
        takeUntilDestroyed(),
        catchError(err => {
          console.error('Error fetching top heroes:', err);
          return of([]); // Provide empty array on error
        })

      )

  }
  ngAfterViewChecked(): void {
    console.log("Dashboard Checked")
  }

  ngOnInit(): void {
    this.topHeroes$.subscribe((topHeroes: unknown) => {
      this.topHeroes = topHeroes as Hero[];
      this.change.detectChanges();
    });
    console.log("Dashboard Component initialized");
  }

  ngOnDestroy(): void {

  }
}




