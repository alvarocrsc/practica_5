import { Injectable } from '@angular/core';
import { IGame } from '../interfaces/igame.interface';
import { games } from '../db/games.db';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  private gamesArray: IGame[] = games;

  getAll(): IGame[] {
    return this.gamesArray;
  }

  constructor() { }
}
