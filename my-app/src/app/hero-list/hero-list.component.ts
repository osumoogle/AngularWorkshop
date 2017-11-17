import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})

export class HeroListComponent implements OnInit {
  heroes: { id: number, name: string, power: string }[];
  selectedHero;

  constructor() { }

  ngOnInit() {
    this.heroes = [{ id: 1, name: 'Logan', power: 'self-healing' },
              { id: 2, name: 'Rogue', power: 'flight, super human strength' },
              { id: 3, name: 'Storm', power: 'elemental' },
              { id: 4, name: 'Jean', power: 'telepathy' }
            ];
  }

  setHero(hero) {
    this.selectedHero = hero;
  }

  isSelected(hero) {
    if (!this.selectedHero) {
      return false;
    }
    return hero.id === this.selectedHero.id;
  }
}
