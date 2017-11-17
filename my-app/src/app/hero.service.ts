import { Injectable } from '@angular/core';
import { Hero } from './hero';

@Injectable()
export class HeroService {
  heroes: Hero[];
  constructor() {
    this.heroes = [
      new Hero(1, 'Logan', 'Healing'),
      new Hero(2, 'Rogue', 'Strength'),
      new Hero(3, 'Jean', 'Telepathy'),
      new Hero(4, 'Storm', 'Elemental')
    ];
   }

  getHeroes() {
    return this.heroes;
  }

  addHero(hero: Hero) {
    this.heroes.push(hero);
  }
}
