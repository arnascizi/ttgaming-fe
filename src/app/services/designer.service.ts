import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, retry} from "rxjs";
import {Designer} from "../common/model/designer";
import {Endpoint} from "../common/model/endpoint";
import {ErrorHandlerComponent} from "../common/error-handler/error-handler.component";

@Injectable({
  providedIn: 'root'
})
export class DesignerService {

  constructor(private httpClient: HttpClient) { }

  getAllDesigners(): Observable<Designer[]> {
    return this.httpClient.get<Designer[]>(Endpoint.DESIGNERS)
      .pipe(
        retry(3),
        catchError(ErrorHandlerComponent.handleError)
      );
  }
}
