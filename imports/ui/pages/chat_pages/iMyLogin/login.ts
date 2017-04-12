import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import { Sim } from 'ionic-native';
import { Accounts } from 'meteor/accounts-base';
import { Meteor } from 'meteor/meteor';
import { Component, AfterContentInit } from '@angular/core';
import { Alert, AlertController, NavController } from 'ionic-angular';
import { VerificationPage } from './verification';
import template from './login.html';

@Component({
  template
})
export class LoginPage{
  phone = '';

  constructor(
    private alertCtrl: AlertController,
    private navCtrl: NavController
  ) {}


  onInputKeypress({keyCode}: KeyboardEvent): void { if (keyCode === 13) { this.login(); } }

  login(phone: string = this.phone): void {
    const alert = this.alertCtrl.create({
      title: 'Confirm',
      message: `Would you like to proceed with the phone number ${phone}?`,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Yes',
          handler: () => {
            this.handleLogin(alert);
            return false;
          }
        }
      ]
    });

    alert.present();
  }

  handleLogin(alert: Alert): void {
    alert.dismiss().then(() => {
      return this.verifyX(this.phone);
    })
    .then(() => {
      this.navCtrl.push(VerificationPage, {
        phone: this.phone
      });
    })
    .catch((e) => {
      this.handleError(e);
    });
  }

  verifyX(phoneNumber: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      Accounts.requestPhoneVerification(phoneNumber, (e: Error) => {
        if (e) {
          return reject(e);
        }

        resolve();
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
