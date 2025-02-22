import { Injectable } from '@angular/core';
import { IGame } from '../interfaces/igame.interface';
import { games } from '../db/games.db';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  private gamesArray: IGame[] = games;

  Insert(game: IGame): any {

    const exists = this.gamesArray.some(g => g.title.toLowerCase() === game.title.toLowerCase());

    if (exists) {
      return { status: false, msg: 'This game is already logged!' };
    }

    this.gamesArray.push(game);
    console.log(this.gamesArray)
    return {status: true, msg: 'Game added successfully'};
  }

  getAll(): IGame[] {
    return this.gamesArray;
  }

  constructor() { }
}
