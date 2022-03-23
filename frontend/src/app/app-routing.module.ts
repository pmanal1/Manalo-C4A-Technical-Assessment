import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { AddHeroComponent } from './add-hero/add-hero.component';
import { UpdateHeroComponent } from './update-hero/update-hero.component';
import { DeleteHeroComponent } from './delete-hero/delete-hero.component';

const routes: Routes = [
  { path: '', component: HeroesListComponent },
  { path: 'heroDetail/:id', component: HeroDetailComponent },
  { path: 'addHero', component: AddHeroComponent },
  { path: 'heroUpdate/:id', component: UpdateHeroComponent},
  { path: 'heroDelete/:id', component: DeleteHeroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
