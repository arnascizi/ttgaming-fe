import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, retry} from "rxjs";
import {Mechanic} from "../interfaces/mechanic";
import {EndpointEnum} from "../enums/endpoint.enum";
import {ErrorHandlerComponent} from "../components/error-handler/error-handler.component";

@Injectable({
  providedIn: 'root'
})
export class MechanicService {

  constructor(private httpClient: HttpClient) { }

  getAllMechanics(): Observable<Mechanic[]> {
    return this.httpClient.get<Mechanic[]>(EndpointEnum.MECHANICS)
      .pipe(
        retry(3),
        catchError(ErrorHandlerComponent.handleError)
      );
  }
}
