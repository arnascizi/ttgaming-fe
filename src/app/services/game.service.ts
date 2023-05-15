import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";
import {BoardGamePreview} from "../common/model/board-game-preview";
import {Endpoint} from "../common/model/endpoint";
import {ErrorHandlerComponent} from "../common/error-handler/error-handler.component";
import {BoardGame} from "../common/model/board-game";
import {Search} from "../common/model/search";

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private httpClient: HttpClient) {
  }

  getAllGames(): Observable<BoardGamePreview[]> {
    return this.httpClient.get<BoardGamePreview[]>(Endpoint.GAMES)
      .pipe(
        retry(3),
        catchError(ErrorHandlerComponent.handleError)
      );
  }

  getGameById(id: number): Observable<BoardGame> {
    return this.httpClient.get<BoardGame>(Endpoint.GAME + id)
      .pipe(
        retry(3),
        catchError(ErrorHandlerComponent.handleError)
      );
  }

  addNewGame(game: BoardGame): Observable<BoardGame> {
    console.log(game);
    return this.httpClient.post<BoardGame>(Endpoint.NEW_GAMES, game)
      .pipe(
        retry(3),
        catchError(ErrorHandlerComponent.handleError)
      );
  }

  deleteGame(id: number): Observable<BoardGame> {
    return this.httpClient.delete<BoardGame>(Endpoint.GAME + id)
      .pipe(
        retry(3),
        catchError(ErrorHandlerComponent.handleError)
      );
  }


}
