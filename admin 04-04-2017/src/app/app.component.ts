import { Cookie } from 'ng2-cookies/ng2-cookies';
import { DetailViewPage } from './../pages/detail-view/detail-view';
import { LimsAdminComponent } from './lims-admin/lims-admin.component';
 import { LimsUserComponent } from './lims-user/lims-user.component'; 
import { HelpPage } from '../pages/help/help';
import { Component,ViewChild,OnInit } from '@angular/core';
import { Platform,Nav } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { TabsPage } from '../pages/tabs/tabs';
import {AcknowledgementPage} from '../pages/acknowledgement/acknowledgement';
import {RecommendationPage} from '../pages/recommendation/recommendation';
import {WishListPage} from '../pages/wishList/wishList';
import { AdminHomeBodyService, Id } from '../providers/admin-home-body.service';
import { Observable } from 'rxjs/Rx';
import { Authenticate } from "../providers/authenticate";
import { ReportsPage } from './../pages/reports/reports';
import { TransferAdminPage } from './../pages/transfer-admin/transfer-admin';
import { RolesPage } from './../pages/roles/roles';
import { ListPage } from './../pages/list/list';
import { BooksReturnedPage } from './../pages/books-returned/books-returned';
import { BooksRequestedPage } from './../pages/books-requested/books-requested';
import { BookReadPage } from './../pages/bookRead/bookRead';
import { ApprovalsPage } from './../pages/approvals/approvals';
import { AddBooksPage } from './../pages/add-books/add-books';
declare var Microsoft: any;
import { AdalService } from "ng2-adal/services/adal.service";

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  adminId;
  flag:boolean=true;
  public rootPage;
  //  public AuthenticationContext;
  // public authority: string = "https://login.windows.net/common";
  // public redirectUri: string = "http://MyLimsNativeApp";
  // public resourceUri: string = "https://graph.windows.net";
   public clientId: string = "99373bce-fb68-4bcd-9adc-a9df099871d1";
  constructor(platform: Platform, private AdminHomeBodyService: AdminHomeBodyService, public adalService:AdalService,
  private Authentication: Authenticate) {
  this.adalService.init(this.Authentication.adalConfig);

  platform.ready().then(() => {
     
    
  this.adalService.handleWindowCallback();
  this.adalService.getUser();
  if(this.adalService.userInfo.isAuthenticated==true)
  {
     this.AdminHomeBodyService.getAdminId(this.adalService.getCachedToken(this.adalService.config.loginResource)).subscribe(response =>
     {
          // this.adminId=adminId;
           console.log("admin-idsssssss",response);
            for(let i=0;i<response.length;i++)
                        {
                         this.adminId= response[i].mId;
                        if (this.adalService.userInfo.userName.substring(0, 8) === this.adminId)
                         {
                            this.flag=false;
                        }
                    }
               if(this.flag==false)
               {
                  this.rootPage=LimsAdminComponent;
               }
               else
                {
                  this.rootPage=LimsAdminComponent;
                }
       });
    }
    else 
    {
      this.adalService.login();
    }

  
    });
  }

  ngOnInit() {
  
}
}



    
 

