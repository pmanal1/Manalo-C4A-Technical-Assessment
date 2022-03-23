import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Hero } from '../types/Hero';
import { ActivatedRoute } from '@angular/router';
import { BackendService } from '../services/backend.service';

@Component({
  selector: 'app-update-hero',
  templateUrl: './update-hero.component.html',
  styleUrls: ['./update-hero.component.css']
})
export class UpdateHeroComponent implements OnInit {
  @Input() hero?: Hero;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private backendService: BackendService
    ) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.backendService.getHero(id).subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if(this.hero) {
      this.backendService.updateHero(this.hero).subscribe(() => this.goBack())
    }
  }

}
