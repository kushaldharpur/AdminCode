import { GetIsbn } from './../../providers/getIsbn.service';
import { DetailViewPage } from './../detail-view/detail-view';
import { AdalService } from 'ng2-adal/services/adal.service';
import { WishListService } from './../../providers/wishList.service';
import { FilterPage } from '../filter/filter';
import { NavController, ToastController } from 'ionic-angular';
import { Search } from './../../providers/search.service';
import { Input, Output, EventEmitter } from '@angular/core';
import { NavParams, PopoverController } from 'ionic-angular';
import { Component, OnInit } from '@angular/core';
//import { Cookie } from 'ng2-cookies/ng2-cookies';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
   
})
export class SearchPage {
  showStyle: false;
  book: any[];
  mid;
  name;
  token;
  constructor(private toastCtrl: ToastController, public nav: NavController, private search: Search,private getIsbn: GetIsbn, private wishList: WishListService, public adalService: AdalService) {
    this.token = this.adalService.getCachedToken(this.adalService.config.loginResource);
    this.mid = this.adalService.userInfo.userName.substring(0, 8);
  }
  presentPopover($event) {
    this.nav.push(FilterPage);
  }

  getAllBooks() {
    console.log('inside service getallbooks');
    this.search.getAllBook().subscribe(
      data => {
        this.book = data
        console.log(this.book);
      },
      error => console.log(error)
    );
  }
  ngOnInit() {
    this.getAllBooks();
  }
  request() {

    let toast = this.toastCtrl.create({
      message: 'Congratulations !! Your book has been requested.Please collect it from library within two days.',
      duration: 3000,
      position: 'bottom',

    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }
  cancelRequest() {

    let toast = this.toastCtrl.create({
      message: 'Your book has been cancelled.',
      duration: 3000,
      position: 'bottom',

    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }w
  // getStyle(isbn) {
  //   let wishIsbn = isbn;
  //   console.log('in getStyle'+isbn);
  //   this.wishList.addToWishList(this.mid, wishIsbn, this.token).subscribe(

  //   )
  // }
  //detailView(isbn){
  //    console.log("Under search isbn"+isbn);
  // Cookie.set('cookieWish', isbn);
  // let wishCookie = Cookie.get('cookieWish');
  // console.log("WishCookie",wishCookie);
  //   this.nav.push(DetailViewPage);
  // }
  putIsbn(isbn){
    this.getIsbn.putIsbn(isbn);
    this.nav.push(DetailViewPage);
  }

}


