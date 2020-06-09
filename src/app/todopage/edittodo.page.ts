import { Component, OnInit } from '@angular/core';
import { ToastController, NavController } from '@ionic/angular';
import * as firebase from 'firebase' ;
import { AngularFirestore} from '@angular/fire/firestore';
import { CrudService } from '../crud.service';
@Component({
  selector: 'app-edittodo',
  templateUrl: './edittodo.page.html',
  styleUrls: ['./edittodo.page.scss'],
})
export class EdittodoPage implements OnInit {

  userId: string;
  todos: any[] = [];
  // test
  tests: any;
  TitleName: string;
  TaskDescription: number;
  
  constructor(private navCtrl: NavController, private toastCtrl: ToastController,
              private db: AngularFirestore, private firestore: AngularFirestore)
 {
    this.userId = firebase.auth().currentUser.uid;
  
  }
 
  ngOnInit() {
    this.readTasks().subscribe(data => {
 
      this.tests = data.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          TitleName: e.payload.doc.data()['Title'],
          TaskDescription: e.payload.doc.data()['Description'],
         };
      })
      console.log(this.tests);
 
    });
  }
   
   
    RemoveRecord(rowID) {
      this.deleteTask(rowID);
    }
   
    EditRecord(record) {
      record.isEdit = true;
      record.EditTitleName = record.TitleName;
      record.EditTaskDescription = record.TaskDescription;
      
    }
   
    updateRecord(recordRow) {
      let record = {};
      record['Title'] = recordRow.TitleName;
      record['Description'] = recordRow.TaskDescription;
      this.updateTask(recordRow.id, record);
      recordRow.isEdit = false;
    }
  
 
  readTasks() {
    
    return this.db.collection('tests').doc('subtest').collection(this.userId).snapshotChanges();
  }
 
  updateTask(recordID,record){
  
     this.db.collection('tests').doc('subtest').collection(this.userId).doc(recordID).update(record);
  }
 
  deleteTask(record_id) {
   this.db.collection('tests').doc('subtest').collection(this.userId).doc(record_id).delete();
  }
  goback(){
    this.navCtrl.navigateForward(['/apphome']);
   }
  addnewTodo() {
    this.navCtrl.navigateForward(['/home']);
   }
   }
