import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  navigate : any;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.sideMenu();

    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  sideMenu()
  {
    this.navigate =
    [
      {
        title : "Home",
        url   : "/apphome",
        icon  : "home"
      },
      {
        title : "To dos",
        url   : "/edittodo",
        icon  : "clipboard"
      },
      {
        title : "Calendar",
        url   : "/calendar-planner",
        icon  : "calendar"
      },
      {
        title : "Timer",
        url   : "/timer",
        icon  : "alarm"
      },
      {
        title : "Shopping List",
        url   : "/todo",
        icon  : "cart"
      },
    ]
  }
}
