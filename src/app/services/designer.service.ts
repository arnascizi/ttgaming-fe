import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, retry} from "rxjs";
import {Designer} from "../interfaces/designer";
import {EndpointEnum} from "../enums/endpoint.enum";
import {ErrorHandlerComponent} from "../components/error-handler/error-handler.component";

@Injectable({
  providedIn: 'root'
})
export class DesignerService {

  constructor(private httpClient: HttpClient) { }

  getAllDesigners(): Observable<Designer[]> {
    return this.httpClient.get<Designer[]>(EndpointEnum.DESIGNERS)
      .pipe(
        retry(3),
        catchError(ErrorHandlerComponent.handleError)
      );
  }
}
