import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase' ;
// import the toast controller for the pop-up message
import { ToastController , NavController} from '@ionic/angular' ;
@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.page.html',
  styleUrls: ['./resetpassword.page.scss'],
})
export class ResetpasswordPage implements OnInit {
  email: string;
  constructor(private toastCtrl: ToastController, private navCtrl: NavController) { }

  ngOnInit() {
  }
  resetPassword(): any {
    this.toastCtrl.create({
      message: 'Password reset email has been sent!',
      position: 'top',
      duration: 1500
    }).then((toast) => {
      toast.present();
    });
    return firebase.auth().sendPasswordResetEmail(this.email);
    
  }
  goback(){
    this.navCtrl.navigateForward(['/login']);
   }
 
}
