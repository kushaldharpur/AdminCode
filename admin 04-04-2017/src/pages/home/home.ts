import { Component } from '@angular/core';
import { BarcodeScanner } from 'ionic-native';
import { NavController,ToastController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 
  constructor(private toastCtrl: ToastController,public navCtrl: NavController) { }
  renew() {
    
  let toast = this.toastCtrl.create({
    message: 'Congratulations !! Your book has been renewed.',
    duration: 1300,
    position: 'bottom',
    
  });

  toast.onDidDismiss(() => {
    console.log('Dismissed toast');
  });

  toast.present();
}

Return() {
    
  let toast = this.toastCtrl.create({
    message: 'Your request for return has been approved. Kindly go to the libarary and return the book !!',
    duration: 3000,
    position: 'bottom',
    
  });

  toast.onDidDismiss(() => {
    console.log('Dismissed toast');
  });

  toast.present();
}

}
