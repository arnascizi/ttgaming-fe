import {HttpErrorResponse} from "@angular/common/http";
import {throwError} from "rxjs";

export class ErrorHandlerComponent {

  public static handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(`Server error with status code ${error.status}, body was: `, error.error);
    }

    return throwError(() => new Error(`Something bad happened; Please try again later.`));
  }
}
