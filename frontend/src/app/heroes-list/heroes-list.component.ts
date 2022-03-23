import { Component, OnInit } from '@angular/core';
import { BackendService } from '../services/backend.service';
import { Hero } from '../types/Hero';
import { fakeHeroList } from '../fake-heroes-list';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent implements OnInit {

  heroes: Hero[] = [];
  selectedHero?: Hero;

  constructor(
    private backend: BackendService,
    ) { }

  async ngOnInit(): Promise<void> {
    // Gets a list of heroes to display
    // this.heroes = await this.backend.getHeroes();
    this.getHeroes();

  }

  getHeroes(): void {
    this.backend.getHeroesReal().subscribe(heroes => {this.heroes = heroes; console.log(this.heroes);});
    
  }

  onClick(hero: Hero): void {
    this.selectedHero = hero;
    
  }
}
