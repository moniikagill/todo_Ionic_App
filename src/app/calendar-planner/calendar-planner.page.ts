import { CalendarComponent } from 'ionic2-calendar/calendar';
import { Component, ViewChild, OnInit, Inject, LOCALE_ID } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { formatDate } from '@angular/common';
import * as firebase from 'firebase' ;
import { CrudService } from '../crud.service';
import {ToastController, NavController } from '@ionic/angular' ;
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-calendar-planner',
  templateUrl: './calendar-planner.page.html',
  styleUrls: ['./calendar-planner.page.scss'],
})
export class CalendarPlannerPage implements OnInit {
  
  event = {
    title: '',
    desc: '',
    startTime: '',
    endTime: '',
    allDay: false
    

  };
calendarevent = {
  calowner: '',
  event

}
  minDate = new Date().toISOString();

  eventSource = [];
  viewTitle;
  calendartodoowner: string;

  calendar = {
    mode: 'month',
    currentDate: new Date(),
  };

  @ViewChild(CalendarComponent) myCal: CalendarComponent;

  constructor(private alertCtrl: AlertController, @Inject(LOCALE_ID) private locale: string,
              private toastCtrl: ToastController, private navCtrl: NavController,
              private crudService: CrudService, private db: AngularFirestore) {
    this.calendartodoowner = firebase.auth().currentUser.uid;
    this.getCalendarData();
              }
     getCalendarData() {
      // this.calendartodoowner = firebase.auth().currentUser.uid;
      this.db.collection('calendertodos').doc('mycalevents').collection(this.calendartodoowner).snapshotChanges().subscribe(colSnap => {
      this.eventSource = [];
      colSnap.forEach(snap => {

        let event: any = snap.payload.doc.data();
        event.id = snap.payload.doc.id;
        event.startTime = event.startTime.toDate();
        event.endTime = event.endTime.toDate();
        event.owner = this.calendartodoowner;
        console.log(event);
        this.eventSource.push(event);
      });

    });

  }

  ngOnInit() {
    this.resetEvent();
  }
  resetEvent() {
    this.event = {
      title: '',
      desc: '',
      startTime: new Date().toISOString(),
      endTime: new Date().toISOString(),
      allDay: false
    };
  }

  // Create the right event format and reload source
  addEvent() {
    
    let eventCopy = {
      title: this.event.title,
      startTime:  new Date(this.event.startTime),
      endTime: new Date(this.event.endTime),
      allDay: this.event.allDay,
      desc: this.event.desc
      
    }
 
    if (eventCopy.allDay) {
      let start = eventCopy.startTime;
      let end = eventCopy.endTime;
 
      eventCopy.startTime = new Date(Date.UTC(start.getUTCFullYear(), start.getUTCMonth(), start.getUTCDate()));
      eventCopy.endTime = new Date(Date.UTC(end.getUTCFullYear(), end.getUTCMonth(), end.getUTCDate() + 1));
    }
    firebase.firestore().collection('calendertodos').doc('mycalevents').collection(this.calendartodoowner).add(eventCopy); // or .set
   
    this.resetEvent();
  }
 

  next() {
    // tslint:disable-next-line: no-string-literal
    const swiper = document.querySelector('.swiper-container')['swiper'];
    swiper.slideNext();
  }
   
  back() {
    // tslint:disable-next-line: no-string-literal
    const swiper = document.querySelector('.swiper-container')['swiper'];
    swiper.slidePrev();
  }
   
  // Change between month/week/day
  changeMode(mode) {
    this.calendar.mode = mode;
  }
   
  // Focus today
  today() {
    this.calendar.currentDate = new Date();
  }
   
  // Selected date range and hence title changed
  onViewTitleChanged(title) {
    this.viewTitle = title;
  }
   
  // Calendar event was clicked
  async onEventSelected(event) {
    // Use Angular date pipe for conversion
    const start = formatDate(event.startTime, 'medium', this.locale);
    const end = formatDate(event.endTime, 'medium', this.locale);
     
    const alert = await this.alertCtrl.create({
      header: event.title,
      subHeader: event.desc,
      message: 'From: ' + start + '<br><br>To: ' + end,
      buttons: ['Ok']
    });
    
    alert.present();
  }
   
  // Time slot was clicked
  onTimeSelected(ev) {
    const selected = new Date(ev.selectedTime);
    this.event.startTime = selected.toISOString();
    selected.setHours(selected.getHours() + 1);
    this.event.endTime = (selected.toISOString());
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