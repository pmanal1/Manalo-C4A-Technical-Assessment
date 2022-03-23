import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Hero } from '../types/Hero';
import { fakeHeroList } from '../fake-heroes-list';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  /**
   * Gets a list of heroes from the backend API
   * 
   * @returns An array of heroes
   */
  getHeroesReal(): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${environment.api}/heroes`);
  }

  getHeroes(): Hero[] {
    // return this.http.get<Hero[]>(`${environment.api}/heroes`);
    return fakeHeroList;
  }

  getHero(heroID: string): Observable<Hero> {
    return this.http.get<Hero>(`${environment.api}/heroes/${heroID}`);
  }

  addHeroes(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(`${environment.api}/heroes`, hero);
  } 

  updateHero(hero: Hero): Observable<ArrayBuffer> {
    return this.http.patch<ArrayBuffer>(`${environment.api}/heroes/${hero.id}`, hero);
  }

  getNewID(): string {
    const lastHero = fakeHeroList.pop()!;
    fakeHeroList.push(lastHero);
    let lastHeroNum = +lastHero.id+1;

    return lastHeroNum.toString();

  }
}
