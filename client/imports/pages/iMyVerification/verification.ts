import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import { Sim } from 'ionic-native';
import { Accounts } from 'meteor/accounts-base';
import { Meteor } from 'meteor/meteor';
import { Component, OnInit } from '@angular/core';
import { AlertController, NavController, NavParams } from 'ionic-angular';
import { ProfilePage } from '../iMyProfile/profile';
import { ProfileFixPage } from '../iMyProfile/profileFix';
import template from './verification.html';

@Component({
  template
})
export class VerificationPage implements OnInit {
  code: string = '1234';
  phone: string;

  constructor(
    private alertCtrl: AlertController,
    private navCtrl: NavController,
    private navParams: NavParams
  ) {}

  ngOnInit() {
    this.phone = this.navParams.get('phone');
  }

  onInputKeypress({keyCode}: KeyboardEvent): void { if (keyCode === 13) { this.verify(); } }

  verify(): void {
    this.loginX(this.phone, this.code).then(() => {
      this.navCtrl.setRoot(ProfileFixPage, {}, {
        animate: true
      });
    });
  }

  loginX(phoneNumber: string, code: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      Accounts.verifyPhone(phoneNumber, code, (e: Error) => {
        if (e) {
          return reject(e);
        }

        resolve();
      });
    });
  }

}