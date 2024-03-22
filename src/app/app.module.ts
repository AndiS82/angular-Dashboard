import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CreateElementDialogComponent } from './components/create-element-dialog/create-element-dialog.component';
import { EditModeComponent } from './components/dashboard/edit-mode/edit-mode.component';
import { DashboardElementComponent } from './components/dashboard/edit-mode/dashboard-element/dashboard-element.component';
import { NoChartComponent } from './components/dashboard/edit-mode/dashboard-element/no-chart/no-chart.component';
import { LineChartComponent } from './components/dashboard/edit-mode/dashboard-element/line-chart/line-chart.component';
import { BarchartComponent } from './components/dashboard/edit-mode/dashboard-element/barchart/barchart.component';
import { PieChartComponent } from './components/dashboard/edit-mode/dashboard-element/pie-chart/pie-chart.component';
import { Top3Component } from './components/dashboard/edit-mode/dashboard-element/top3/top3.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NgApexchartsModule } from 'ng-apexcharts';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CreateElementDialogComponent,
    EditModeComponent,
    DashboardElementComponent,
    NoChartComponent,
    LineChartComponent,
    BarchartComponent,
    PieChartComponent,
    Top3Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    NgApexchartsModule,
    MatIconModule,
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
