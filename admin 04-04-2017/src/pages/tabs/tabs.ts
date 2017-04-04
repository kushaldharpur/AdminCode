import { RecommendationPage } from './../recommendation/recommendation';
import { Splashscreen } from 'ionic-native';
import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { SearchPage } from '../search/search';
import { NotificationPage } from '../notification/notification';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = SearchPage;
  tab3Root: any = NotificationPage;
  tab4Root: any = RecommendationPage;
  constructor() {

  }
}
