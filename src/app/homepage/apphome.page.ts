import { Component, OnInit, ViewChild } from '@angular/core';

import { NavController, IonNav} from '@ionic/angular';
import * as firebase from 'firebase' ;
@Component({
  selector: 'app-apphome',
  templateUrl: './apphome.page.html',
  styleUrls: ['./apphome.page.scss'],
})
export class ApphomePage implements OnInit {
 
  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }
  logout() {
    firebase.auth().signOut().then(() => {
 
     console.log('signedout');
     this.navCtrl.navigateForward('/loggedout');
 
    // this.navCtrl.navigateRoot('');
    }).catch((err) => {
     console.log(err);
    });
 
  }
}
