import { Component, OnInit, ViewChild } from '@angular/core';
import { TimerComponent } from './timer/timer.component';

@Component({
  selector: 'app-parent-child',
  templateUrl: './parent-child.component.html',
  styleUrls: ['./parent-child.component.css']
})
export class ParentChildComponent implements OnInit {

  @ViewChild("stopwatch2", { static: true })
  private myTimer: TimerComponent;

  constructor() { }

  ngOnInit() {
  }

  start() {
    this.myTimer.start();
  }

  stop() {
    this.myTimer.stop();
  }

  clear() {
    this.myTimer.clear();
  }

}
