import { Component, OnInit, Injectable } from '@angular/core';
import { AlertController, NavController, Alert, ViewController } from 'ionic-angular';
import { MeteorObservable } from 'meteor-rxjs';
import { Pictures } from '../../../utils/chat_logic/collections';
import { Profile } from '.../../../utils/chat_logic/models';
import { PictureService } from '../../../utils/chat_logic/services/iMyPicture';
import { ChatsPage } from '../iMyChats/chats';
import template from './profileFix.html';

@Component({template})

export class ProfileFixPage implements OnInit {
  picture: string;
  profile: Profile;

  constructor(
    private alertCtrl: AlertController,
    private navCtrl: NavController,
    private pictureService: PictureService,
    private viewCtrl: ViewController) {}

    goToChat(): void {
        this.viewCtrl.dismiss().then(() => {
        this.navCtrl.push(ChatsPage);
        });
    }


  ngOnInit(): void {
    this.profile = Meteor.user().profile || {name: ''};

    MeteorObservable.subscribe('user').subscribe(() => {
      this.picture = Pictures.getPictureUrl(this.profile.pictureId);
    });
  }

}


//---------------------------------------------//
