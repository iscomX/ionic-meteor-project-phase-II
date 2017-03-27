import { Component, OnInit } from '@angular/core';
import { AlertController, NavController, NavParams } from 'ionic-angular';
import { ProfilePage } from '../iMyProfile/profile';
import { ProfileFixPage } from '../iMyProfile/profileFix';
import { PhoneService } from '../../services/iMyPhone';
import template from './verification.html';

@Component({
  template
})
export class VerificationPage implements OnInit {
  code: string = '';
  phone: string;

  constructor(
    private alertCtrl: AlertController,
    private navCtrl: NavController,
    private navParams: NavParams,
    private phoneService: PhoneService
  ) {}

  ngOnInit() {
    this.phone = this.navParams.get('phone');
  }

  onInputKeypress({keyCode}: KeyboardEvent): void {
    if (keyCode === 13) {
      this.verify();
    }
  }

  verify(): void {
    this.phoneService.login(this.phone, this.code).then(() => {
      this.navCtrl.setRoot(ProfileFixPage, {}, {
        animate: true
      });
    });
  }

  handleError(e: Error): void {
    console.error(e);

    const alert = this.alertCtrl.create({
      title: 'Oops!',
      message: e.message,
      buttons: ['OK']
    });

    alert.present();
  }
}