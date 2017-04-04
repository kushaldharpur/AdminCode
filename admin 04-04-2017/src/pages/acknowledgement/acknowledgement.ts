import { Component } from '@angular/core';
import { TabsPage } from '../pages/tabs/tabs';
import { URLSearchParams } from '@angular/http';
import { BarcodeScanner } from 'ionic-native';
import { NavController, NavParams } from 'ionic-angular';
import { UrlFetchApp } from 'httpresponse';
import { BarcodeService } from './../../providers/barcode.service';
import { AdalService } from 'ng2-adal/services/adal.service';
@Component({
  selector: 'page-acknowledgement',
  templateUrl: 'acknowledgement.html'
})
export class AcknowledgementPage {
  results: any;
  mid;
  token;
  isbn: string;
  book;
  constructor(private barcodeservive: BarcodeService, public adalService: AdalService) {
    this.token = this.adalService.getCachedToken(this.adalService.config.loginResource);
    this.mid = this.adalService.userInfo.userName.substring(0, 8);
  }
  scan(isbn) {
    this.isbn = isbn;
    console.log(isbn);
    this.barcodeservive.getBarcodeDetails(this.isbn, this.token).subscribe(
      data => {
        this.book = data
        console.log(this.book);
      },
      error => console.log(error)
    );
    // BarcodeScanner.scan().then((barcodeData) => {
    //   this.results=barcodeData;
    //   let isbn=results.text;

    //   isbn = isbn || "9781451648546"; 
    //   console.log(isbn);
    //   var url = "https://www.googleapis.com/books/v1/volumes?q=isbn:" + isbn;
    //   var params = new URLSearchParams(url);

    //   let response = params.get('params');
    //  console.log(response);
    //   var results = JSON.parse(response);
    //   console.log(results);
    //   if (results) {
    //      console.log(isbn);
    //     var book = results.items[0];
    //     var title = (book["volumeInfo"]["title"]);
    //     var subtitle = (book["volumeInfo"]["subtitle"]);
    //     var authors = (book["volumeInfo"]["authors"]);
    // var printType = (book["volumeInfo"]["printType"]);
    // var pageCount = (book["volumeInfo"]["pageCount"]);
    // var publisher = (book["volumeInfo"]["publisher"]);
    // var publishedDate = (book["volumeInfo"]["publishedDate"]);
    // var webReaderLink = (book["accessInfo"]["webReaderLink"]);
    //console.log('title--- '+ title);
    //}

    // },(err) => {
    //     alert(`error : ${err}`);
    //   });
    // }
    //}
  }
  reset() {
    this.results = null;
  }
}