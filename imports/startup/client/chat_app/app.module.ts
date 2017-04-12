import { NgModule, ErrorHandler } from '@angular/core';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { MomentModule } from 'angular2-moment';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
//page ts file
import { ChatsPage } from '../../../ui/pages/chat_pages/iMyChats/chats'
import { menuChatComponent } from '../../../ui/pages/chat_pages/iMyChats/menuChat';
import { NewChatComponent } from '../../../ui/pages/chat_pages/iMyChats/new-chat';
import { LoginPage } from '../../../ui/pages/chat_pages/iMyLogin/login';
import { VerificationPage } from '../../../ui/pages/chat_pages/iMyLogin/verification';
import { MessagesPage } from '../../../ui/pages/chat_pages/iMyMessages/messages';
import { MessagesAttachmentsComponent } from '../../../ui/pages/chat_pages/iMyMessages/messages-attachments';
import { menuMessagesComponent } from '../../../ui/pages/chat_pages/iMyMessages/menuMessages';
import { NewLocationMessageComponent } from '../../../ui/pages/chat_pages/iMyMessages/location-message';
import { ShowPictureComponent } from '../../../ui/pages/chat_pages/iMyMessages/show-picture';
import { ProfilePage } from '../../../ui/pages/chat_pages/iMyProfile/profile';
import { ProfileFixPage } from '../../../ui/pages/chat_pages/iMyProfile/profileFix';
import { PictureService } from '../../../ui/utils/chat_logic/services/iMyPicture';
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