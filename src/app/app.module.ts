import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// imports for fire
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';

// import firebase to the module
import * as firebase from 'firebase' ;

// initialise the app using firebase initialiser, that takes in json object
firebase.initializeApp({
  apiKey: "AIzaSyBtV09L_99VLaAOXBN9D4TEHlb5TDKUCBY",
  authDomain: "mytodo-75874.firebaseapp.com",
  databaseURL: "https://mytodo-75874.firebaseio.com",
  projectId: "mytodo-75874",
  storageBucket: "mytodo-75874.appspot.com",
  messagingSenderId: "349048231784",
  appId: "1:349048231784:web:9059a542088c85f5"
});
// to fix the error in the page that gets loaded on web
// firebase.firestore().settings({
//   timestampsInSnapshots: true
// });

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireDatabaseModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
