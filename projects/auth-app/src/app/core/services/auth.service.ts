import { Injectable } from '@angular/core';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private users: any = null;

  constructor(private tokenService: TokenService) {}

  login(username: string, password: string) {}
}
