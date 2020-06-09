import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddNewtodoPage } from './add-newtodo.page';

const routes: Routes = [
  {
    path: '',
    component: AddNewtodoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AddNewtodoPage]
})
export class AddNewtodoPageModule {}
