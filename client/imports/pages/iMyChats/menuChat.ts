import { Component, Injectable } from '@angular/core';
import { Alert, AlertController, NavController, ViewController } from 'ionic-angular';
import { PhoneService } from '../../services/iMyPhone';
import { LoginPage } from '../iMyLogin/login';
import { ProfilePage } from '../iMyProfile/profile';
import { ProfileFixPage, } from '../iMyProfile/profileFix';
import template from './menuChat.html';

@Component({
  template
})
@Injectable()
export class menuChatComponent {
  constructor(
    private alertCtrl: AlertController,
    private navCtrl: NavController,
    private phoneService: PhoneService,
    private viewCtrl: ViewController
  ) {}

  goToProfile(): void {
    this.viewCtrl.dismiss().then(() => {
      this.navCtrl.push(ProfileFixPage);
    });
  }

  logout(): void {
    const alert = this.alertCtrl.create({
      title: 'Logout',
      message: 'Are you sure you would like to proceed?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Yes',
          handler: () => {
            this.handleLogout(alert);
            return false;
          }
        }
      ]
    });

    this.viewCtrl.dismiss().then(() => {
      alert.present();
    });
  }

  handleLogout(alert: Alert): void {
    alert.dismiss().then(() => {
      return this.phoneService.logout();
    })
    .then(() => {
      this.navCtrl.setRoot(LoginPage, {}, {
        animate: true
      });
    })
    .catch((e) => {
      this.handleError(e);
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