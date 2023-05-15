import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, retry} from "rxjs";
import {Expansion} from "../interfaces/expansion";
import {EndpointEnum} from "../enums/endpoint.enum";
import {ErrorHandlerComponent} from "../components/error-handler/error-handler.component";

@Injectable({
  providedIn: 'root'
})
export class ExpansionService {

  constructor(private http: HttpClient) { }

  getExpansionsByGameId(gameId: string): Observable<Expansion[]> {
    return this.http.get<Expansion[]>(EndpointEnum.GAME_EXPANSIONS + gameId)
      .pipe(
        retry(3),
        catchError(ErrorHandlerComponent.handleError)
      );
  }
}
