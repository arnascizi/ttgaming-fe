import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, retry} from "rxjs";
import {Category} from "../common/model/category";
import {Endpoint} from "../common/model/endpoint";
import {ErrorHandlerComponent} from "../common/error-handler/error-handler.component";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpCLient: HttpClient) { }

  getAllCategories(): Observable<Category[]> {
    return this.httpCLient.get<Category[]>(Endpoint.CATEGORIES)
      .pipe(
        retry(3),
        catchError(ErrorHandlerComponent.handleError)
      );
  }
}
