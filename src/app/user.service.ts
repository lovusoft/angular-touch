import {EventEmitter, Injectable, Output} from '@angular/core';
import {User, Token} from './user';
import {Observable, of, throwError} from 'rxjs';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError, map, retry, tap} from 'rxjs/operators';
import {Router} from '@angular/router';
import {MessageService} from './message.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient, private router: Router, private messageService: MessageService) {
  }

  @Output() getLoginStatus: EventEmitter<any> = new EventEmitter();

  static getUserInfo(): Observable<User> {
    return of(JSON.parse(window.sessionStorage.getItem('userInfo')));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  fetchUser(token: Token) {
    this.http.post<User>('/getUserInfo', token)
      .pipe(retry(3),
        tap(_ => this.log('fetched user')),
        catchError(this.handleError<User>('fetchUser', new User())))
      .subscribe(res => {
        window.sessionStorage.setItem('userInfo', JSON.stringify(res));
        this.router.navigate(['/']);
      });
    this.getLoginStatus.emit(true);
  }

  userLogin(loginForm): void {
    this.http.post<Token>('/login', loginForm)
      .pipe(
        retry(3),
        tap(_ => this.log('fetched token')),
        catchError(this.handleError<Token>('login', new Token())))
      .subscribe(res => {
          if (res.status === true) {
            window.sessionStorage.setItem('token', JSON.stringify(res));
            this.fetchUser(res);
          }
        }
      );
  }

  private log(message: string) {
    this.messageService.add(`UserService: ${message}`);
  }
}
