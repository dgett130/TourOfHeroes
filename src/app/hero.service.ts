import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HeroesComponent } from './heroes/heroes.component';
import { MessageService } from './message.service';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor( private messageService: MessageService ) { }

  // getHeroes(): Hero[] {
  //   return HEROES;
  // }

  getHeroes(): Observable<Hero[]> {
    // of(HEROES) return an Observable<Hero[]> that emits a single value, the array of mock heroes
    const heroes = of(HEROES);
    this.messageService.add('HeroService: Fetched heroes');
    return heroes;
  }

  getHero(id: number): Observable<Hero> {
    //TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`)
    return of(HEROES.find(hero => hero.id == id));
  }

}
