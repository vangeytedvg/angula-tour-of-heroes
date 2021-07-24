import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  // this variable is visible in the template file (heroes.component.html)
  heroes = HEROES;
  selectedHero?: Hero;

  ngOnInit(): void {}

  onSelect(hero: Hero): void {
    // set the locale variable to an instance of the selected Hero
    this.selectedHero = hero;
  }
}
