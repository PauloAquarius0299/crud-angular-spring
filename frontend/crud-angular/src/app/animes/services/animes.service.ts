import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Anime } from '../model/anime';
import { first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimesService {

  private readonly API = '/assets/animes.json'

  constructor(private httpClient: HttpClient) { }

  list(){
    return this.httpClient.get<Anime[]>(this.API)
    .pipe(
      first(),
      tap(animes => console.log(animes)))
  }
}
