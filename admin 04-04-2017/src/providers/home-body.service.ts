import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { AdalService } from 'ng2-adal/core';

export interface data {
  isbn: string;
}

@Injectable()

export class HomeBodyService {
  token;
  mid;
  name;
  email;
  constructor(private http: Http, public adalService: AdalService) {
    this.token = this.adalService.getCachedToken(this.adalService.config.loginResource);
    this.mid = this.adalService.userInfo.userName.substring(0, 8);
    this.name = this.adalService.userInfo.profile.name;
    this.email = this.adalService.userInfo.profile.unique_name;
  }
}