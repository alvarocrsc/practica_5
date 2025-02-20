import { Component, inject } from '@angular/core';
import { GameCardComponent } from "../game-card/game-card.component";
import { GamesService } from '../../services/games.service';
import { IGame } from '../../interfaces/igame.interface';

@Component({
  selector: 'app-blog',
  imports: [GameCardComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  gameService = inject(GamesService);
  games: IGame[] = [];

  ngOnInit() {
    this.games = this.gameService.getAll();
  }

  
}
