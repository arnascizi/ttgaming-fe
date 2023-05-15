import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthBody} from "../interfaces/auth-body";
import {BehaviorSubject, catchError, map, Observable, retry} from "rxjs";
import {EndpointEnum} from "../enums/endpoint.enum";
import {ErrorHandlerComponent} from "../components/error-handler/error-handler.component";
import {UserDetails} from "../interfaces/user-details";
import {Router} from "@angular/router";
import {User} from "../interfaces/user";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private userSubject!: BehaviorSubject<UserDetails | null>;
  public user!: Observable<UserDetails | null>;

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) {
    this.userSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('user')!));
    this.user = this.userSubject.asObservable();
  }

  public get userValue() {
    return this.userSubject.asObservable();
  }

  login(auth: AuthBody) {
    return this.httpClient.post<UserDetails>(EndpointEnum.USER_LOGIN, auth)
      .pipe(map(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('user', JSON.stringify(user));
        this.userSubject.next(user);
        return user;
      }));
  }

  logout() {
    localStorage.removeItem('user');
    this.userSubject.next(null);
    this.router.navigate(['login']);
    return this.httpClient.post(EndpointEnum.USER_SIGNOUT, this);
  }

  register(user: User) {
    return this.httpClient.post(EndpointEnum.USER_REGISTER, user);
  }

  // getAll() {
  //   return this.http.get<User[]>(`${environment.apiUrl}/users`);
  // }
  //
  // getById(id: string) {
  //   return this.http.get<User>(`${environment.apiUrl}/users/${id}`);
  // }

  // update(id: string, params: any) {
  //   return this.http.put(`${environment.apiUrl}/users/${id}`, params)
  //     .pipe(map(x => {
  //       // update stored user if the logged in user updated their own record
  //       if (id == this.userValue?.id) {
  //         // update local storage
  //         const user = { ...this.userValue, ...params };
  //         localStorage.setItem('user', JSON.stringify(user));
  //
  //         // publish updated user to subscribers
  //         this.userSubject.next(user);
  //       }
  //       return x;
  //     }));
  // }

  // delete(id: string) {
  //   return this.http.delete(`${environment.apiUrl}/users/${id}`)
  //     .pipe(map(x => {
  //       // auto logout if the logged in user deleted their own record
  //       if (id == this.userValue?.id) {
  //         this.logout();
  //       }
  //       return x;
  //     }));
  // }
}
