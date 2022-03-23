import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BackendService } from '../services/backend.service';
import { Hero } from '../types/Hero';

@Component({
  selector: 'app-add-hero',
  templateUrl: './add-hero.component.html',
  styleUrls: ['./add-hero.component.css']
})
export class AddHeroComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private backendService: BackendService
  ) { }

  ngOnInit(): void {
  }

  add(heroName: string, heroClass: string, heroLevel: number): void {
    const newID = this.backendService.getNewID();
    const newHero: Hero = {
      "id": newID, 
      "name": heroName, 
      "class": heroClass, 
      "level": heroLevel
    }
    // if (!heroName) {return;}
    this.backendService.addHeroes(newHero).subscribe();

    // console.log(newID);
    console.log(JSON.stringify(newHero));
  }

  
  goBack(): void {
    this.location.back();
  }
}
