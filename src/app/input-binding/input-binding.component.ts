import { Component, OnInit, Input } from '@angular/core';
import { Client } from './client.model';

@Component({
  selector: 'app-input-binding',
  templateUrl: './input-binding.component.html',
  styleUrls: ['./input-binding.component.css']
})
export class InputBindingComponent implements OnInit {

  @Input('firstName') name: string;
  @Input() lastName: string;
  @Input() age: number;

  clients: Client[];

  constructor() {
    this.clients = [
      { id: 1, name: "Client 01", age: 20 },
      { id: 2, name: "Client 02", age: 21 },
      { id: 3, name: "Client 03", age: 23 },
      { id: 4, name: "Client 04", age: 22 }
    ];
  }

  ngOnInit() {
  }

}
