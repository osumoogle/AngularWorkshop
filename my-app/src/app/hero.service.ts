import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HeroService {
  heroes: Hero[];
  constructor(private http: HttpClient) {
   }

  getHeroes() {
    return this.http.get<Hero[]>('app/heroes.json');
  }
}
