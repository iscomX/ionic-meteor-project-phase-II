import { Component, OnInit, Injectable } from '@angular/core';
import { AlertController, NavController, Alert, ViewController } from 'ionic-angular';
import { MeteorObservable } from 'meteor-rxjs';
import { Pictures } from '../../../../imports/collections';
import { Profile } from '../../../../imports/models';
import { PictureService } from '../../services/iMyPicture';
import { ChatsPage } from '../iMyChats/chats';
import template from './profileFix.html';

@Component({
  template
})
export class ProfileFixPage implements OnInit {
  picture: string;
  profile: Profile;

  constructor(
    private alertCtrl: AlertController,
    private navCtrl: NavController,
    private pictureService: PictureService,
    private viewCtrl: ViewController
  ) {}

    goToChat(): void {
    this.viewCtrl.dismiss().then(() => {
      this.navCtrl.push(ChatsPage);
    });
  }

  ngOnInit(): void {
    this.profile = Meteor.user().profile || {
      name: ''
    };

    MeteorObservable.subscribe('user').subscribe(() => {
      this.picture = Pictures.getPictureUrl(this.profile.pictureId);
    });
  }

  selectProfilePicture(): void {
    this.pictureService.select().then((blob) => {
      this.uploadProfilePicture(blob);
    })
      .catch((e) => {
        this.handleError(e);
      });
  }

  uploadProfilePicture(blob: Blob): void {
    this.pictureService.upload(blob).then((picture) => {
      this.profile.pictureId = picture._id;
      this.picture = picture.url;
    })
      .catch((e) => {
        this.handleError(e);
      });
  }

  gotoChat(): void {
    this.navCtrl.setRoot(ChatsPage);
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