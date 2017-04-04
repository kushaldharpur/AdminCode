import { Component,ViewChild, OnInit } from '@angular/core';
import { Platform,Nav } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { TabsPage } from '../../pages/tabs/tabs';
import {AcknowledgementPage} from '../../pages/acknowledgement/acknowledgement';
import {RecommendationPage} from '../../pages/recommendation/recommendation';
import {WishListPage} from '../../pages/wishList/wishList';
import { HelpPage } from '../../pages/help/help';
import {AdalService} from 'ng2-adal/core';
import {IONIC_DIRECTIVES, NavController, NavParams}   from 'ionic-angular';



@Component({
  templateUrl: './lims-user.component.html'
})
export class LimsUserComponent {
 @ViewChild(Nav) nav: Nav;
  rootPage: any = TabsPage;
  flag:boolean;

 
  constructor(public platform: Platform,public adalService:AdalService,public navCtrl: NavController, public navParams: NavParams) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
  openAcknowledgement()
{
  this.nav.push(AcknowledgementPage);
} 
 openHelp()
{
  this.nav.push(HelpPage);
} 
 openWishList()
{
  this.nav.push(WishListPage);
}

// doLogout(){
//    this.userData.logout();
// }
public logOut() {
    this.adalService.logOut();
  }
  ngOnInit() {
    this.flag=false;
    console.log(this.flag);
    
  }

}
