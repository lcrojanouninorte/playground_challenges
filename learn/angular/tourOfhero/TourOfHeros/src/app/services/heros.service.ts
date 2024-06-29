import { Injectable } from '@angular/core';
import { HEROS, Hero } from '../models/heros';
import { BehaviorSubject, Observable, map, of, timeout } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  private heroes: Hero[] = [...HEROS];
  private heroesSubject: BehaviorSubject<Hero[]> = new BehaviorSubject<Hero[]>(this.heroes);

  getHeroes(): Observable<Hero[]> {
    return this.heroesSubject.asObservable();
  }

  getHero(id: number): Observable<Hero | undefined> {
    return of(this.heroes.find(hero => hero.id === id));
  }

  addHero(hero: Hero): Observable<Hero> {
    if (!hero.id) {
      console.log("Hero to be added: ", hero);
      hero.id = this.heroes.length + 11;
      this.heroes.push({ ...hero });
      console.log("Hero Added: ", this.heroes);
    } else {
      console.log("Hero to be updated: ", hero);
      this.updateHero(hero);
    }

    this.heroesSubject.next(this.heroes);
    return of(hero);
  }

  deleteHero(id: number): void {
    this.heroes = this.heroes.filter(hero => hero.id !== id);
    this.heroesSubject.next(this.heroes);
  }

  updateHero(hero: Hero): void {
    const index = this.heroes.findIndex(h => h.id === hero.id);
    this.heroes[index] = { ...hero };
    console.log("Hero updated: ", this.heroes);
    this.heroesSubject.next(this.heroes);
  }

  getTopHeroes(): Observable<Hero[]> {
    return this.heroesSubject.pipe(

      map(heroes => heroes.slice(-4))
    );
  }
}
