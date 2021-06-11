import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { HttpService } from '../../http.service';
import * as highcharts from 'highcharts';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css'],
})
export class BarComponent implements OnInit {
  @ViewChild('chart') public chartEl: ElementRef;
  data = [];

  constructor(private http: HttpService) {}

  ngOnInit() {
    this.http.getPosts().subscribe((post) => {
      post.map((obj1) => {
        this.data.push(obj1.id);
      });
      this.sudeep();
    });
  }

  sudeep(): void {
    highcharts.chart(this.chartEl.nativeElement, {
      chart: {
        type: 'bar',
      },
      title: {
        text: null,
      },
      plotOptions: {
        bar: {
          dataLabels: {
            enabled: false,
          },
        },
      },
      credits: {
        enabled: false,
      },
      series: [
        {
          type: undefined,
          name: null,
          data: this.data,
          showInLegend: false,
        },
      ],
    });
  }
}
