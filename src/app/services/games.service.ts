import { Injectable } from '@angular/core';
import { IGame } from '../interfaces/igame.interface';
import { games } from '../db/games.db';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  private gamesArray: IGame[] = games;

  Insert(game: IGame): any {
    this.gamesArray.push(game);
    console.log(this.gamesArray);
    return {status: true, msg: 'Game added successfully'};
  }

  getAll(): IGame[] {
    return this.gamesArray;
  }

  constructor() { }
}
