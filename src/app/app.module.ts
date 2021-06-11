import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TemplateModule } from './template/template.module';
import { ChartsModule } from './charts/charts.module';
import { HighchartsChartModule } from 'highcharts-angular';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { EventsComponent } from './events/events.component';
import { SpeciaEventsComponent } from './specia-events/specia-events.component';
import { AuthGuard } from './auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    EventsComponent,
    SpeciaEventsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TemplateModule,
    ChartsModule,
    HighchartsChartModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
