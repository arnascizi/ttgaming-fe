import {Component, OnInit} from '@angular/core';
import {GameService} from "../../services/game.service";
import {BoardGamePreview} from "../../common/model/board-game-preview";
import {take, tap} from "rxjs";
import {Router} from "@angular/router";
import {Search} from "../../common/model/search";

@Component({
  selector: 'app-board-games',
  templateUrl: './board-games.component.html',
  styleUrls: ['./board-games.component.css']
})
export class BoardGamesComponent implements OnInit {
  boardGames!: BoardGamePreview[];
  displayColumns: string[] = ['position', 'title', 'rating'];

  constructor(private gameService: GameService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.gameService
      .getAllGames()
      .pipe(
        take(1),
        tap((games) => {
          this.boardGames = games;
        })
      )
      .subscribe();
  }

  openGame(id: string) {
    this.router.navigate(['/board/game', id]);
  }

}
