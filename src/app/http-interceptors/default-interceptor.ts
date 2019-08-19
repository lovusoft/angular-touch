import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class DefaultInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authToken = 'testAuthToken';
    const secureReq = req.clone({
      url: 'https://www.easy-mock.com/mock/5d584bfb9934fa11b04645a4/touch' + req.url,
      setHeaders: {
        'Content-Type': 'application/json',
        Authorization: authToken
      },
      body: JSON.stringify(req.body)
    });
    return next.handle(secureReq);
  }
}
