import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    console.log('Interceptor hit:', req.url);

    const modifiedReq = req.clone({
      setHeaders: {
        Authorization: 'Bearer my-demo-token',
      },
    });

    return next.handle(modifiedReq);
  }
}
