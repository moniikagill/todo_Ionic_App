import { Component, OnInit } from '@angular/core';
// importing firebase
import * as firebase from 'firebase' ;
// importing the toast controller
import {ToastController, NavController } from '@ionic/angular' ;

@Component({
  selector: 'app-add-newtodo',
  templateUrl: './add-newtodo.page.html',
  styleUrls: ['./add-newtodo.page.scss'],
})
export class AddNewtodoPage implements OnInit {
  todotitle: string;
  tododescription: string;
  tododate: Date;
  todoowner: string;
  tagsts: []; //
  constructor(private toastCtrl: ToastController, private navCtrl: NavController) {
    // assigning the correct uid to the correct user
    this.todoowner = firebase.auth().currentUser.uid;
   }

  ngOnInit() {
  }

  addtodo() {
    
      firebase.firestore().collection('todos').add({
      title: this.todotitle,
      description: this.tododescription,
      date: new Date(this.tododate),
      owner: this.todoowner,
      status: 'incomplete',
      tags: this.tagsts,
      created: firebase.firestore.FieldValue.serverTimestamp()

    }).then((docRef) => {
      this.toastCtrl.create({
        message: 'Your task has been added!',
        duration: 3000
      }).then((toast) => {
        toast.present();
        this.navCtrl.back();
      });
    }).catch((err) => {
      this.toastCtrl.create({
        message: err.message,
        duration: 3000
      }).then((toast) => {
        toast.present();
      });

  });
  }
}
