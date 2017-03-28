import { Profile } from './../imports/models';
import { Accounts } from 'meteor/accounts-base';
import { Meteor } from 'meteor/meteor';
import { Chats, Messages, Users } from '../imports/collections';
import { MessageType, Picture } from '../imports/models';

Meteor.startup(() => {
  if (Meteor.settings) {
    Object.assign(Accounts._options, Meteor.settings['accounts-phone']);
    SMS.twilio = Meteor.settings['twilio'];
  }

  if (Users.collection.find().count() > 0) { return; }
//--------> user start <--------//
//==============================User-A========================//
  let picture = importPictureFromUrl({
                                      name: 'user-A.png',
                                      url: 'https://ionic-meteor.000webhostapp.com/user-A.png'
                                     });

  Accounts.createUserWithPhone({
                             phone: '+212666000001',
                             profile: {
                                     name: 'person A',
                                     pictureId: picture._id
                                      }
                              });

//==============================User-B========================//
  picture = importPictureFromUrl({
    name: 'user-B.jpg',
    url: 'https://ionic-meteor.000webhostapp.com/user-B.png'
  });

  Accounts.createUserWithPhone({
    phone: '+212666000002',
    profile: {
      name: 'person B',
      pictureId: picture._id
    }
  });

//==============================User-C========================//
  picture = importPictureFromUrl({
    name: 'user-C.jpg',
    url: 'https://ionic-meteor.000webhostapp.com/user-C.jpg'
  });

  Accounts.createUserWithPhone({
    phone: '+212666000003',
    profile: {
      name: 'person C',
      pictureId: picture._id
    }
  });

//==============================User-D========================//
  picture = importPictureFromUrl({
    name: 'user-D.jpg',
    url: 'https://ionic-meteor.000webhostapp.com/user-D.jpg'
  });

  Accounts.createUserWithPhone({
    phone: '+212666000004',
    profile: {
      name: 'person D',
      pictureId: picture._id
    }
  });
//==============================User-E========================//
  picture = importPictureFromUrl({
    name: 'user-E.jpg',
    url: 'https://ionic-meteor.000webhostapp.com/user-E.jpg'
  });

  Accounts.createUserWithPhone({
    phone: '+212666000005',
    profile: {
      name: 'person E',
      pictureId: picture._id
    }
    });
  });

//==============================================//
function importPictureFromUrl(options: { name: string, url: string }): 
     Picture { const description = { name: options.name };
     return Meteor.call('ufsImportURL', options.url, description, 'pictures');
}

//==============================================//
