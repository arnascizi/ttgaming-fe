import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, retry} from "rxjs";
import {Expansion} from "../common/model/expansion";
import {Endpoint} from "../common/model/endpoint";
import {ErrorHandlerComponent} from "../common/error-handler/error-handler.component";

@Injectable({
  providedIn: 'root'
})
export class ExpansionService {

  constructor(private http: HttpClient) { }

  getExpansionsByGameId(gameId: string): Observable<Expansion[]> {
    return this.http.get<Expansion[]>(Endpoint.GAME_EXPANSIONS + gameId)
      .pipe(
        retry(3),
        catchError(ErrorHandlerComponent.handleError)
      );
  }
}
