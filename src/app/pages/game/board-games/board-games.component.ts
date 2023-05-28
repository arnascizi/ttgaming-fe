import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {GameService} from "../../../services/game.service";
import {BoardGamePreview} from "../../../interfaces/board-game-preview";
import {BehaviorSubject, take, tap} from "rxjs";
import {Router} from "@angular/router";
import {Search} from "../../../interfaces/search";
import {GameSearch} from "../../../interfaces/game-search";
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {PageableSearch} from "../../../interfaces/pageable-search";

@Component({
  selector: 'app-board-games',
  templateUrl: './board-games.component.html',
  styleUrls: ['./board-games.component.css']
})
export class BoardGamesComponent implements OnInit {
  boardGames!: BoardGamePreview[];
  displayColumns: string[] = ['position', 'title', 'rating'];
  search = new PageableSearch();

  constructor(private gameService: GameService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.doSearch();
  }

  openGame(id: string) {
    this.router.navigate(['/board/game', id]);
  }

  doSearch() {
    this.gameService.findGames(this.search)
      .pipe(
        take(1),
        tap((games) => {
          this.boardGames = games;
        })
      )
      .subscribe();
  }
}
