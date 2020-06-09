import { Component, OnInit } from '@angular/core';
// import firebase
import * as firebase from 'firebase' ;
// import toast controller for toast message
import {ToastController, NavController} from '@ionic/angular' ;
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
 
  email: string;
  password: string;

  constructor(private toastCtrl: ToastController, private navCtrl: NavController) { }

  ngOnInit() {
  }
signup() {
  firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then((userData) => {
   console.log(userData);
    // navigate the user to Mytodo page
   this.navCtrl.navigateForward(['/todo']);

  }).catch((err) => {
   this.toastCtrl.create({
    message: err.message,
    duration: 5000
   }).then((toast) => {
    toast.present();
   });

  });
}

login() {
 this.navCtrl.back();
}
}
