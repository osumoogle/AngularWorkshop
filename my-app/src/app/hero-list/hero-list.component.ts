import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})

export class HeroListComponent implements OnInit {
  heroes: Hero[];
  hero: Hero;
  selectedHero;

  constructor(private heroService: HeroService) {
   }

  ngOnInit() {
    this.heroes = this.heroService.getHeroes();
  }

  setHero(hero) {
    this.selectedHero = hero;
  }

  add(hero: Hero) {
    this.heroService.addHero(hero);
    this.heroes = this.heroService.getHeroes();
  }

  isSelected(hero) {
    return hero === this.selectedHero;
  }
}
