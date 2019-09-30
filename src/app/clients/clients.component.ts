import { Component, OnInit } from '@angular/core';
import { Client } from './client.model';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  name: string;
  age: number;

  clients: Client[] = [];

  constructor() { }

  ngOnInit() {
  }

  save() {
    this.clients.push({ name: this.name, age: this.age });

    this.name = ""
    this.age = 0;
  }

  delete(index: number) {
    this.clients.splice(index, 1);
  }

  update(client: Client, index: number) {
    this.clients[index] = client;
  }

}
