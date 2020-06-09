import { Component, OnInit } from '@angular/core';
import { NavController} from '@ionic/angular';
@Component({
  selector: 'app-timer',
  templateUrl: './timer.page.html',
  styleUrls: ['./timer.page.scss'],
})
export class TimerPage implements OnInit {

  elapsed: any = {
    h: '00',
    m: '00',
    s: '00'
  }
  progress:any = 0;
  overallProgress:any = 0;
  percent: number = 0;
  radius: number = 100;
  minutes: number = 1;
  seconds: any = 10;
  timer: any = false;
  overallTimer: any = false;
  fullTime: any = '00:02:00';


  countDownTimer: any = false;
  timeLeft: any = {
    m: '00',
    s: '00'
  };
  remainingTime = `${this.timeLeft.m}:${this.timeLeft.s}`;

  constructor(private navCtrl: NavController) {

  

  }
  ngOnInit() {
  }
  goback()
  {
    this.navCtrl.navigateForward(['/apphome']);

  }
  touchMe() {
    console.log('touched');
  }

  startTimer() {
    if (this.timer) {
      clearInterval(this.timer);
      clearInterval(this.countDownTimer);
    }
    if (!this.overallTimer) {
      this.progressTimer();
    }

    this.timer = false;
    this.percent = 0;
    this.progress = 0;

    let timeSplit = this.fullTime.split(':');
    this.minutes = timeSplit[1];
    this.seconds = timeSplit[2];

    let totalSeconds = Math.floor(this.minutes * 60) + parseInt(this.seconds);
    let secondsLeft = totalSeconds;

    let forwardingTimer = () => {
        if (this.percent == this.radius) clearInterval(this.timer)
        this.percent = Math.floor((this.progress / totalSeconds) * 100)
        ++this.progress
      }

    let backTimer = () => {
        if (secondsLeft >= 0) {
          this.timeLeft.m = Math.floor(secondsLeft / 60)
          this.timeLeft.s = secondsLeft - (60 * this.timeLeft.m)
          this.remainingTime = `${this.pad(this.timeLeft.m, 2)}:${this.pad(this.timeLeft.s, 2)}`
          secondsLeft--;
        }
      }

      // run once when clicked
    forwardingTimer();
    backTimer();

      // timers start 1 second later
    this.countDownTimer = setInterval(backTimer, 1000);
    this.timer = setInterval(forwardingTimer, 1000);
  }

  stopTimer() {
    clearInterval(this.countDownTimer);
    clearInterval(this.timer);
    clearInterval(this.overallTimer);
    this.timer = false;
    this.percent = 0;
    this.progress = 0;
    this.countDownTimer = false;
    this.overallTimer = false;
    this.elapsed = {
      h: '00',
      m: '00',
      s: '00'
    }
    this.timeLeft = {
      m: '00',
      s: '00'
    }
    this.remainingTime = `${this.pad(this.timeLeft.m, 2)}:${this.pad(this.timeLeft.s, 2)}`;
  }

  progressTimer() {
    let ctdownDate = new Date();

    this.overallTimer = setInterval(() => {
      let now = new Date().getTime();

      //  distance between now an the count down date
      var dist = now - ctdownDate.getTime();

      // calculating time for hours, minutes and seconds

      this.elapsed.h = Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.elapsed.m = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
      this.elapsed.s = Math.floor((dist % (1000 * 60)) / 1000);

      this.elapsed.h = this.pad(this.elapsed.h, 2);
      this.elapsed.m = this.pad(this.elapsed.m, 2);
      this.elapsed.s = this.pad(this.elapsed.s, 2);
     }, 1000)
  }

    pad(num, size) {
      let x = num + '';
      while (x.length < size) {x = '0' + x;}
      return x;
    }

    updateMyDate($event) {
      console.log($event.split(':'));
    }
  }


