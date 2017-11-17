import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroService } from './hero.service';


@NgModule({
  declarations: [
    AppComponent,
    HeroListComponent,
    HeroDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent, HeroListComponent]
})
export class AppModule { }
