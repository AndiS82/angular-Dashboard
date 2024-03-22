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
import { Top5Component } from './components/dashboard/edit-mode/dashboard-element/top5/top5.component';

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
    Top5Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
