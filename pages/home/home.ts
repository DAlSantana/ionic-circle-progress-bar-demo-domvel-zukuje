import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  styleUrls: ['./home.scss']
})
export class HomePage {
  progress = 0;
  timerHandler: number;
  progressText = "Ready";

  constructor(public navCtrl: NavController) { }

  stop() {
    if (this.timerHandler) {
      window.clearInterval(this.timerHandler);
      this.timerHandler = 0;
    }
  }

  start() {
    this.stop();
    this.progress = 0;
    this.progressText = "Started";
    this.timerHandler = window.setInterval(() => {
      this.progress += Math.random() * 5;
      if (this.progress >= 50) {
        this.progressText = "Please stay tuned.";
      }
      if (this.progress >= 100) {
        this.progress = 100;
        this.progressText = "Complete"
        this.stop();
      }
    }, 100);
  }
}

/*
  (c) Copyright 2019 @Domvel (Github)
*/