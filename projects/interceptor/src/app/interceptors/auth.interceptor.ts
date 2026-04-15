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
    const token = localStorage.getItem('token');

    let modifiedReq = req;

    // Skip login API
    if (!req.url.includes('login') && token) {
      modifiedReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
    }

    console.log('👉 Interceptor:', modifiedReq.url);

    return next.handle(modifiedReq);
  }
}
