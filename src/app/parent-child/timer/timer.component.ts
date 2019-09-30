import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  miliseconds: number = 0;

  private interval: any;
  private isRunning: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  start() {
    if (!this.isRunning) {
      this.interval = setInterval(() => {
        this.miliseconds += 50;
      }, 50);

      this.isRunning = true;
    }

  }

  stop() {
    if (this.isRunning) {
      clearInterval(this.interval);
      this.isRunning = false;
    }
  }

  clear() {
    this.miliseconds = 0;
  }

  round(n: number) {
    return Math.round(n);
  }

}
