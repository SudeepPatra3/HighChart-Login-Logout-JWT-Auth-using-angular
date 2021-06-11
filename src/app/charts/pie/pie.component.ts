import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { HttpService } from '../../http.service';
import * as highcharts from 'highcharts';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css'],
})
export class PieComponent implements OnInit {
  @ViewChild('chart') public chartEl: ElementRef;

  data = [];

  constructor(private http: HttpService) {}

  ngOnInit() {
    this.http.getpie().subscribe((post) => {
      post.map((obj) => {
        this.data.push({
          name: obj.name,
          y: obj.y,
        });
      });
      this.sudeep();
    });
  }

  sudeep() {
    highcharts.chart(this.chartEl.nativeElement, {
      chart: {
        type: 'pie',
      },
      title: {
        text: null,
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
      },
      credits: {
        enabled: false,
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %',
          },
        },
      },
      series: [
        {
          name: 'Brands',
          colorByPoint: true,
          type: undefined,
          data: this.data,
        },
      ],
    });
  }
}
