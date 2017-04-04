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
export class BarcodeService {
    token;
    mid;
    isbn;
    constructor(public http: Http, public adalService: AdalService) {
        console.log('Hello wishlist Provider');
        this.token = this.adalService.getCachedToken(this.adalService.config.loginResource);
        this.mid = this.adalService.userInfo.userName.substring(0, 8);
        // this.name = this.adalService.userInfo.profile.name;
        // this.email = this.adalService.userInfo.profile.unique_name;
    }
    getBarcodeDetails(isbn: string, token): Observable<Data[]> {
        console.log('inside service barcode');
        console.log('in barcode' + isbn);
        let headers = new Headers({ 'Authorization': 'Bearer ' + token });
        let options = new RequestOptions({ headers: headers });
        return this.http.get("https://www.googleapis.com/books/v1/volumes?q=isbn:" + isbn)
            .map((res: Response) => res.json());
    }
    addNewBook(isbn:string, title:string, author:string,publisher:string, copies: string,dropdown:string,token): Observable<Data[]> {
        console.log('inside service barcode');
        console.log('in barcode' + copies);
        let headers = new Headers({ 'Authorization': 'Bearer ' + token });
        let options = new RequestOptions({ headers: headers });
        return this.http.get("https://localhost:3000/addnewbook/"+isbn+"/"+title+"/"+author+"/"+publisher+"/"+copies+"/"+dropdown,options)
            .map((res: Response) => res.json());
    }
    try(token): Observable<Data[]> {
        console.log('inside try');
        let headers = new Headers({ 'Authorization': 'Bearer ' + token });
        let options = new RequestOptions({ headers: headers });
        return this.http.get("https://webtechsolutionsapi.azurewebsites.net/lims/getAllAdminDetails/",options)
            .map((res: Response) => res.json());
    }
    
}