import { Component, OnInit} from '@angular/core';
import { ToastController, NavController } from '@ionic/angular';
import * as firebase from 'firebase' ;
import { AngularFirestore} from '@angular/fire/firestore';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  todotitle: string;
  tododescription: string;
  tododate: Date;
  todoowner: string;
  tagsts: [];
  userId: string;
  todos: any[] = [];
  // test
  tests: any;
  TitleName: string;
  TaskDescription: number;
  
  constructor(private navCtrl: NavController, private toastCtrl: ToastController,
              private db: AngularFirestore, private crudService: CrudService, private firestore: AngularFirestore,
              )
 {
    this.userId = firebase.auth().currentUser.uid;
   
  }
  ngOnInit() {
   
  }
  CreateRecord(){
    let record = {};
    record['Title'] = this.TitleName;
    record['Description'] = this.TaskDescription;
    this.createnewTask(record).then(resp => {
      this.TitleName = "";
      this.TaskDescription = undefined;
     console.log(resp);
    })
      .catch(error => {
        console.log(error);
      });
  }

  createnewTask(record) {
   
    return this.db.collection('tests').doc('subtest').collection(this.userId).add(record);
  }
  addnewTodo() {
  this.navCtrl.navigateForward(['/add-newtodo']);
 }
 goback(){
  this.navCtrl.navigateForward(['/edittodo']);

}
}
