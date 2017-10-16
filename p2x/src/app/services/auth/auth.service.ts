import { Injectable } from '@angular/core';
import { JwtHelper } from "angular2-jwt";
import { IAccount } from '../../models/account';

// key where token storage in localstorage
const TOKEN_KEY = "token";

@Injectable()
export class AuthService {

  constructor(private helper: JwtHelper) { }

  isAuthenicated() {
    return this.getToken() != null;
  }

  setToken(token: string) {
    localStorage.setItem(TOKEN_KEY, token);
  }

  getToken(): string {
    return localStorage.getItem(TOKEN_KEY);
  }

  removeToken() {
    localStorage.removeItem(TOKEN_KEY);
  }

  getAccount(): IAccount {
    const token = this.getToken();
    return <IAccount>this.helper.decodeToken(token);
  }
}
