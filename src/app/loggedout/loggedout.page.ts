import { Component, OnInit } from '@angular/core';
import { ToastController , NavController} from '@ionic/angular' ;
@Component({
  selector: 'app-loggedout',
  templateUrl: './loggedout.page.html',
  styleUrls: ['./loggedout.page.scss'],
})
export class LoggedoutPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  login() {
    
      this.navCtrl.navigateForward(['/login']);
    
    
  
    }
}
