import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, retry} from "rxjs";
import {Category} from "../interfaces/category";
import {EndpointEnum} from "../enums/endpoint.enum";
import {ErrorHandlerComponent} from "../components/error-handler/error-handler.component";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpCLient: HttpClient) { }

  getAllCategories(): Observable<Category[]> {
    return this.httpCLient.get<Category[]>(EndpointEnum.CATEGORIES)
      .pipe(
        retry(3),
        catchError(ErrorHandlerComponent.handleError)
      );
  }
}
