import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { CalendarComponent } from 'ionic2-calendar/calendar';
import { Component, ViewChild, OnInit, Inject, LOCALE_ID } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { formatDate } from '@angular/common';
import * as firebase from 'firebase' ;

import { IonicModule } from '@ionic/angular';
import { NgCalendarModule  } from 'ionic2-calendar';
import { CalendarPlannerPage } from './calendar-planner.page';

const routes: Routes = [
  {
    path: '',
    component: CalendarPlannerPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgCalendarModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CalendarPlannerPage]
})
export class CalendarPlannerPageModule {}
