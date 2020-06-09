import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'signup', loadChildren: './signup/signup.module#SignupPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'todo', loadChildren: './shoppinglist/todo.module#TodoPageModule' },
  { path: 'add-newtodo', loadChildren: './addshopitem/add-newtodo.module#AddNewtodoPageModule' },
  { path: 'loggedout', loadChildren: './loggedout/loggedout.module#LoggedoutPageModule' },
  { path: 'calendar-planner', loadChildren: './calendar-planner/calendar-planner.module#CalendarPlannerPageModule' },
  { path: 'home', loadChildren: './addnewtodo/home.module#HomePageModule' },
  { path: 'apphome', loadChildren: './homepage/apphome.module#ApphomePageModule' },
  { path: 'timer', loadChildren: './timer/timer.module#TimerPageModule' },
  { path: 'edittodo', loadChildren: './todopage/edittodo.module#EdittodoPageModule' },
  { path: 'resetpassword', loadChildren: './resetpassword/resetpassword.module#ResetpasswordPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
