import { JsonPipe, NgIf } from '@angular/common';
import { AfterViewChecked, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Form, FormsModule, NgForm } from '@angular/forms';
import { Hero } from '../models/heros';
import { Observable, defaultIfEmpty, map, of, switchMap } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../services/heros.service';

@Component({
  selector: 'hr-hero-form',
  standalone: true,
  imports: [FormsModule, NgIf, JsonPipe],
  templateUrl: './hero-form.component.html',
  styleUrl: './hero-form.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroFormComponent implements OnInit, AfterViewChecked {

hero: Hero = {id: null, name: ''} ;
subscribe$: Observable<Hero> ;
  constructor( private route: ActivatedRoute, private heroService: HeroesService, private change: ChangeDetectorRef) {
    this.subscribe$ = this.route.paramMap.pipe(
      switchMap(params => {
        const id = Number(params.get('id'));
        if(id){
          return this.heroService.getHero(id) ;
        }else{
          return of({id: null, name: ''} as Hero);
        }
      }),
      map(hero => hero || {id: null, name: ''} as Hero) // Add this line to handle undefined hero
    );
  }
  ngOnInit(): void {
    this.subscribe$.subscribe(hero => {
      this.hero = hero;
      this.change.detectChanges();
    })
    console.log("Hero updated", this.hero);
  }

  onSubmit(heroForm: NgForm) {
    if(this.hero){
       this.heroService.addHero(
        {name: heroForm.value.name, id: heroForm.value.id}).subscribe(hero => {
          this.hero = hero;
          this.change.markForCheck;
        });
      }
  }

  ngAfterViewChecked(): void {
    console.log("Hero Form Checked")
  }
}
