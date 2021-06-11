import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { HttpService } from '../../http.service';
import * as highcharts from 'highcharts';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css'],
})
export class AreaComponent implements OnInit {
  @ViewChild('charts') public chartEl: ElementRef;
  data = [];

  constructor(private http: HttpService) {}

  ngOnInit() {
    this.http.getPosts().subscribe((post) => {
      post.map((obj) => {
        this.data.push(obj.id);
      });
      this.sudeep();
    });
  }

  sudeep(): void {
    highcharts.chart(this.chartEl.nativeElement, {
      title: {
        text: '',
      },
      yAxis: {
        labels: {
          enabled: false,
        },
      },
      xAxis: {
        labels: {
          enabled: false,
        },
      },
      series: [
        {
          type: 'line',
          name: 'Installation',
          data: this.data,
        },
      ],
    });
  }
}
