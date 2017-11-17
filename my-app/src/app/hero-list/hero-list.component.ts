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
    this.heroService.getHeroes().subscribe(heroes => (this.heroes = heroes));
  }

  setHero(hero) {
    this.selectedHero = hero;
  }

  isSelected(hero) {
    return hero === this.selectedHero;
  }
}
