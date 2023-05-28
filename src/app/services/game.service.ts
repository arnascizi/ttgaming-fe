import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";
import {BoardGamePreview} from "../interfaces/board-game-preview";
import {EndpointEnum} from "../enums/endpoint.enum";
import {ErrorHandlerComponent} from "../components/error-handler/error-handler.component";
import {BoardGame} from "../interfaces/board-game";
import {Search} from "../interfaces/search";
import {GameSearch} from "../interfaces/game-search";
import {PageableSearch} from "../interfaces/pageable-search";

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private httpClient: HttpClient) {
  }

  findGames(search: PageableSearch): Observable<BoardGamePreview[]> {
    return this.httpClient.post<BoardGamePreview[]>(EndpointEnum.SEARCH, search)
      .pipe(
        retry(3),
        catchError(ErrorHandlerComponent.handleError)
      );
  }

  getGameById(id: number): Observable<BoardGame> {
    return this.httpClient.get<BoardGame>(EndpointEnum.GAME + id)
      .pipe(
        retry(3),
        catchError(ErrorHandlerComponent.handleError)
      );
  }

  addNewGame(game: BoardGame): Observable<BoardGame> {
    return this.httpClient.post<BoardGame>(EndpointEnum.NEW_GAMES, game)
      .pipe(
        retry(3),
        catchError(ErrorHandlerComponent.handleError)
      );
  }

  deleteGame(id: number): Observable<BoardGame> {
    return this.httpClient.delete<BoardGame>(EndpointEnum.GAME + id)
      .pipe(
        retry(3),
        catchError(ErrorHandlerComponent.handleError)
      );
  }

  getTopGames(): Observable<BoardGamePreview[]> {
    return this.httpClient.get<BoardGamePreview[]>(EndpointEnum.TOP_GAMES)
      .pipe(
        retry(3),
        catchError(ErrorHandlerComponent.handleError)
      );
  }
}
