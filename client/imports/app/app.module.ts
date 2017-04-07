import { NgModule, ErrorHandler } from '@angular/core';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { MomentModule } from 'angular2-moment';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
//page ts file
import { ChatsPage } from '../pages/iMyChats/chats'
import { menuChatComponent } from '../pages/iMyChats/menuChat';
import { NewChatComponent } from '../pages/iMyChats/new-chat';
import { LoginPage } from '../pages/iMyLogin/login';
import { MessagesPage } from '../pages/iMyMessages/messages';
import { MessagesAttachmentsComponent } from '../pages/iMyMessages/messages-attachments';
import { menuMessagesComponent } from '../pages/iMyMessages/menuMessages';
import { NewLocationMessageComponent } from '../pages/iMyMessages/location-message';
import { ShowPictureComponent } from '../pages/iMyMessages/show-picture';
import { ProfilePage } from '../pages/iMyProfile/profile';
import { ProfileFixPage } from '../pages/iMyProfile/profileFix';
import { VerificationPage } from '../pages/iMyVerification/verification';
import { PictureService } from '../services/iMyPicture';
import { MyApp } from './app.component';

@NgModule({
  declarations: [
    MyApp,
    ChatsPage,
    MessagesPage,
    LoginPage,
    VerificationPage,
    ProfilePage,
    ProfileFixPage,
    menuChatComponent,
    NewChatComponent,
    menuMessagesComponent,
    MessagesAttachmentsComponent,
    NewLocationMessageComponent,
    ShowPictureComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    MomentModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDSsjP7rcP7GM0j1Pyy865Ty3Zdi0LaFwI'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ChatsPage,
    MessagesPage,
    LoginPage,
    VerificationPage,
    ProfilePage,
    ProfileFixPage,
    menuChatComponent,
    NewChatComponent,
    menuMessagesComponent,
    MessagesAttachmentsComponent,
    NewLocationMessageComponent,
    ShowPictureComponent
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    PictureService
  ]
})
export class AppModule {}