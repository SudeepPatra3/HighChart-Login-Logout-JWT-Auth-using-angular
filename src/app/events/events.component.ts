import { Component, OnInit } from '@angular/core';
//import { EventService } from '../event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
})
export class EventsComponent implements OnInit {
  events = [];

  constructor() {}

  ngOnInit() {
    // this.http.getEvents().subscribe((res) => (this.events = res));
  }
}
