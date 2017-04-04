import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { AdalService } from 'ng2-adal/core';

/*
  Generated class for the Search provider.

  See http://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
export interface Data {
    dt: string;
}
@Injectable()
export class TransferAdminService {
    token;
    mid;
    constructor(public http: Http, public adalService: AdalService) {
        this.token = this.adalService.getCachedToken(this.adalService.config.loginResource);
        this.mid = this.adalService.userInfo.userName.substring(0, 8);
        // this.name = this.adalService.userInfo.profile.name;
        // this.email = this.adalService.userInfo.profile.unique_name;
    }
    getAllAdmins(token): Observable<Data[]> {
        console.log('inside Admin service');
        let headers = new Headers({ 'Authorization': 'Bearer ' + token });
        let options = new RequestOptions({ headers: headers });
        return this.http.get("https://webtechsolutionsapi.azurewebsites.net/lims/getAllAdminDetails/",options)
            .map((res: Response) => res.json());
    }
    makeAdmin(AdminId:string,token): Observable<Data[]> {
        console.log('inside Admin service');
        let headers = new Headers({ 'Authorization': 'Bearer ' + token });
        let options = new RequestOptions({ headers: headers });
        return this.http.get("https://webtechsolutionsapi.azurewebsites.net/lims/transferAccess/"+this.mid+"/"+AdminId,options)
            .map((res: Response) => res.json());
    }
}