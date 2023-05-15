import {Component, OnInit} from '@angular/core';
import {BoardGamePreview} from "../../common/model/board-game-preview";
import {GameService} from "../../services/game.service";
import {take, tap} from "rxjs";
import {Search} from "../../common/model/search";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  games!: BoardGamePreview[];
  search!: Search<BoardGamePreview>;

  constructor(private gameService: GameService) {
  }

  ngOnInit(): void {
    this.gameService
      .getAllGames()
      .pipe(
        take(1),
        tap((games) => {
          this.games = games;
        })
      )
      .subscribe();
  }

}
