import { Component } from '@angular/core';
import { AnalyticsComponent } from '../analytics/analytics.component';
import { ChartComponent } from '../chart/chart.component';
import { OffersComponent } from '../offers/offers.component';
import { ReportsComponent } from '../reports/reports.component';

@Component({
  selector: 'app-dashboard',
  imports: [
    ChartComponent,
    AnalyticsComponent,
    ReportsComponent,
    OffersComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {}
