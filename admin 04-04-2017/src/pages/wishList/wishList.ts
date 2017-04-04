import { AdalService } from 'ng2-adal/core';
import { WishListService } from './../../providers/wishList.service';
import { Component } from '@angular/core';
 import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-wishList',
  templateUrl: 'wishList.html'
})
export class WishListPage {
 book: any[];
 mId;
 token;
  constructor(public navCtrl: NavController,private wishList: WishListService, public adalService: AdalService) {
    this.mId = this.adalService.userInfo.userName.substring(0, 8);
  }
getBookDetails() {
    console.log('inside service getbook details'+this.mId);
    this.wishList.getBookDetails(this.mId,this.token).subscribe(
      data => {
        this.book = data
        console.log(this.book);
      },
      error => console.log(error)
    );
  }
  ngOnInit() {
    this.getBookDetails();
  }
}