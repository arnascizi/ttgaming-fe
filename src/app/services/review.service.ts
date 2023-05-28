import {ErrorHandler, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Review} from "../interfaces/review";
import {catchError, Observable, retry} from "rxjs";
import {EndpointEnum} from "../enums/endpoint.enum";
import {ErrorHandlerComponent} from "../components/error-handler/error-handler.component";
import {ReviewRequest} from "../interfaces/review-request";

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private httpClient: HttpClient) { }

  postReview(review: ReviewRequest): Observable<Review> {
    return this.httpClient.post<Review>(EndpointEnum.REVIEW, review)
      .pipe(
        retry(3),
        catchError(ErrorHandlerComponent.handleError)
      );
  }
}
