import { HomeBodyService } from './../../providers/home-body.service';
import { WishListService } from './../../providers/wishList.service';
import { GetIsbn } from './../../providers/getIsbn.service';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { Observable } from 'rxjs/Rx';
import { CookieService } from 'angular2-cookie/core';
import { BookReadPage } from './../bookRead/bookRead';
import { SearchPage } from './../search/search';
import { Search } from './../../providers/search.service';
import { Component} from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import {AdalService} from 'ng2-adal/core';
/*
  Generated class for the DetailView page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-detail-view',
  templateUrl: 'detail-view.html'
})
export class DetailViewPage {
  mid:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private getIsbn: GetIsbn,public adalService:AdalService,  private toastCtrl: ToastController,private wishListService:WishListService,private _cookieService:CookieService,private homeBodyService:HomeBodyService) {
    // this.IssueService=IssueService;
    // this.token = HomeBodyService.token;
    this.mid = homeBodyService.mid;

  }
 
    // console.log("wishcookie....kjfkjznck.."+wishCookie);
   
  
  // let d=this._cookieService.getObject('wishCookie');
  // var isbn=detail.detailIsbn; 
  book=[]
  isbn:string;
  token;
   addWish(){
     this.isbn=this.getBook();
     console.log('in add wish:'+this.isbn)
     this.wishListService.addtowishlist(this.mid,this.isbn,this.adalService.getCachedToken(this.token)).subscribe(
        data => {
        this.book = data
        console.log("hey in add wish"+this.book);
      },
      error => console.log(error)
     )
   }
   getBook(){
     let x=this.getIsbn.getBookIsbn();
     console.log('new val x'+x);
     return x;
   }

   

}
