import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(private heroService: HeroService,
              private messageService: MessageService) { }

  ngOnInit(){
    this.getHeroes();
  }

  // selectedHero?: Hero;
  // onSelect(hero: Hero): void{
  //   this.selectedHero = hero;
  //   this.messageService.add(`HeroComponent: Selected hero id=${hero.id}`);
  // }

  // getHeroes(){
  //   this.heroes = this.heroService.getHeroes();
  // }


  // Obsevable and subscribe can make asyncronous call/response
  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes); 
  }

}
