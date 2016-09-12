import { Component } from '@angular/core';
import { AlertController, Alert } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/alert/alert.html',
})
export class AlertPage {

  constructor(public alertCtrl: AlertController) {
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'New Friend!',
      subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
      buttons: ['OK']
    });
    alert.present();
  }

}
