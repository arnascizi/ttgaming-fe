import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, retry} from "rxjs";
import {Mechanic} from "../common/model/mechanic";
import {Endpoint} from "../common/model/endpoint";
import {ErrorHandlerComponent} from "../common/error-handler/error-handler.component";

@Injectable({
  providedIn: 'root'
})
export class MechanicService {

  constructor(private httpClient: HttpClient) { }

  getAllMechanics(): Observable<Mechanic[]> {
    return this.httpClient.get<Mechanic[]>(Endpoint.MECHANICS)
      .pipe(
        retry(3),
        catchError(ErrorHandlerComponent.handleError)
      );
  }
}
