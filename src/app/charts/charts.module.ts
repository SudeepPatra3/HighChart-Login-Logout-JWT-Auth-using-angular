import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AreaComponent } from './area/area.component';
import { BarComponent } from './bar/bar.component';
import { PieComponent } from './pie/pie.component';
import { HighchartsChartModule } from 'highcharts-angular';

@NgModule({
  declarations: [AreaComponent, BarComponent, PieComponent],
  imports: [CommonModule, HighchartsChartModule, HttpClientModule],
  exports: [
    AreaComponent,
    BarComponent,
    PieComponent,
    HighchartsChartModule,
    HttpClientModule,
  ],
})
export class ChartsModule {}
