import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {BoardGamePreview} from "./interfaces/board-game-preview";
import {GameService} from "./services/game.service";
import {take, tap} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ttgaming-fe';
  topGames!: BoardGamePreview[];

  constructor(private gameService: GameService) {
  }

  ngOnInit(): void {
    this.gameService
      .getTopGames()
      .pipe(
        take(1),
        tap((games) => {
          this.topGames = games;
        })
      )
      .subscribe();
  }
}
