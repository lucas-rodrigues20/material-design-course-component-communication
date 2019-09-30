import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  title: string = "Any title";
  value: number = 0;

  constructor() { }

  ngOnInit() {
  }

  incBy(num: number) {
    this.value += num;
  }

}
