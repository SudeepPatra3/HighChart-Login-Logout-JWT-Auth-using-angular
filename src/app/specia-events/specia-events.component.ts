import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-specia-events',
  templateUrl: './specia-events.component.html',
  styleUrls: ['./specia-events.component.css'],
})
export class SpeciaEventsComponent implements OnInit {
  spclevents = [];

  constructor() {}

  ngOnInit() {
    // this.http.getSpclEvents().subscribe((res) => (this.spclevents = res));
  }
}
