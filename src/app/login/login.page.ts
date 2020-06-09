import { Component, OnInit } from '@angular/core';
// import firebase
import * as firebase from 'firebase' ;
// import the toast controller for the pop-up message
import { ToastController , NavController} from '@ionic/angular' ;
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string;
  password: string;


  constructor(private toastCtrl: ToastController, private navCtrl: NavController) {

    // function to check if a user is currently logged in or not
    // onAuthStateChanged returns a user if user is not null
     firebase.auth().onAuthStateChanged((user) => {
        if (user) {
        // if user is logged in navigate the user to todo page of app
        this.navCtrl.navigateForward(['/apphome']);
       //this.navCtrl.navigateForward(['/todo']);
        } else {
           // no user is logged in

        }

     });
   }

  ngOnInit() {
  }
login() {
firebase.auth().signInWithEmailAndPassword(this.email, this.password).then((userObject) => {

  console.log(userObject);
 
  // navigate the user to My todo page
  this.toastCtrl.create({
    message: 'welcome to your Schedular',
    position: 'top',
    duration: 1000
  }).then((toast) => {
    toast.present();
  });
  this.email = '';
  this.password = '';
  this.navCtrl.navigateForward(['/apphome']);


}).catch((err) => {
  this.toastCtrl.create({
    message: err.message,
    duration: 2000

  }).then((toast) => {
    toast.present();
  });
});
}

// need navigation controller for going to the signup page from login page
signup() {
this.navCtrl.navigateForward(['/signup']);
}

resetPwd() {
  this.navCtrl.navigateForward(['/resetpassword']);
}

}
