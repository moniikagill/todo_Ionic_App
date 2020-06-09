import { Component, OnInit } from '@angular/core';
// navcontroller import
import { NavController, ToastController} from '@ionic/angular';
// retreive documents from firebase
import * as firebase from 'firebase' ;
import { AngularFirestore } from '@angular/fire/firestore';
;
// import { AngularFireAuth } from '@angular/fire/auth'; public afAuth: AngularFireAuth

@Component({
  selector: 'app-todo',
  templateUrl: './todo.page.html',
  styleUrls: ['./todo.page.scss'],
})
export class TodoPage implements OnInit {
  x: string;
  todotitle: string;
  tododescription: string;
  tododate: Date;
  todoowner: string;
  tagsts: [];
  userId: string;
  todos: any[] = [];
  eventSource = [];
  constructor(private navCtrl: NavController, private toastCtrl: ToastController,
              private db: AngularFirestore)
 {
    this.userId = firebase.auth().currentUser.uid;
    this.getTodoData();
  }

  ngOnInit() {
  }
  // to display dtae nicely on the todo list page
 getDate(timestamp: firebase.firestore.Timestamp) {
   let date = timestamp.toDate();
   return date.toLocaleDateString();

 }

  // get the data displays the data from firebase
  getTodoData() {
    firebase.firestore().collection('todos')
    .where('owner', '==', this.userId)
    .where('status', '==', 'incomplete')   // only show the tasks that are not marked as completed
    .onSnapshot((querySnapshot) => {    // using onSnapshot instead of get will show newly added todo as soon as its added
      this.todos = querySnapshot.docs; // docs will display all the documents that match the owner
    });
  }
 addnewTodo() {
  this.navCtrl.navigateForward(['/add-newtodo']);
 }
 EditRecord(record) {
  record.isEdit = true;
  record.EditName = record.Title;
  record.EditDescription = record.Description;
  record.EditDate = record.Date;
}
updateDocument(collectionName: string, docID: string, dataObj: any): Promise<any> {
  return new Promise((resolve, reject) => {
      this.db
          .collection(collectionName)
          .doc(docID)
          .update(dataObj)
          .then((obj: any) => {
              resolve(obj);
          })
          .catch((error: any) => {
              reject(error);
          });
  });
}
gettodoData2() {
  firebase.firestore().collection('todos').get().then(
    (queryDocumentSnapshot) => {
      console.log(queryDocumentSnapshot.docs);
      this.todos = queryDocumentSnapshot.docs;
    })


}
editTodo() {
  this.navCtrl.navigateForward('/edittodo');
}

 markDone(document: firebase.firestore.QueryDocumentSnapshot) {

  firebase.firestore().collection('todos').doc(document.id).set({
    status: 'completed'
  }, {
    merge: true

  }).then(() => {
    this.toastCtrl.create({
      message: 'This item is marked as completed!',
      duration: 2000
    }).then((toast) => {
      toast.present();
    });
  });

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
