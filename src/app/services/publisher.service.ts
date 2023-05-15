import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, retry} from "rxjs";
import {Publisher} from "../interfaces/publisher";
import {EndpointEnum} from "../enums/endpoint.enum";
import {ErrorHandlerComponent} from "../components/error-handler/error-handler.component";

@Injectable({
  providedIn: 'root'
})
export class PublisherService {

  constructor(private httpClient: HttpClient) { }

  getAllPublishers(): Observable<Publisher[]> {
    return this.httpClient.get<Publisher[]>(EndpointEnum.PUBLISHERS)
      .pipe(
        retry(3),
        catchError(ErrorHandlerComponent.handleError)
      );
  }
}
