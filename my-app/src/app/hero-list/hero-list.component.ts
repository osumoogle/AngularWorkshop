import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})

export class HeroListComponent implements OnInit {
  heroes: Hero[];
  selectedHero;

  constructor() { }

  ngOnInit() {
    this.heroes = [
      new Hero(1, 'Logan', 'Healing'),
      new Hero(2, 'Rogue', 'Strength'),
      new Hero(3, 'Jean', 'Telepathy'),
      new Hero(4, 'Storm', 'Elemental')
            ];
  }

  setHero(hero) {
    this.selectedHero = hero;
  }

  isSelected(hero) {
    return hero === this.selectedHero;
  }
}
