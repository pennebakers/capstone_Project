import { Component, OnInit } from '@angular/core';
import { ApexChart, ApexDataLabels, ApexNonAxisChartSeries, ApexTitleSubtitle } from 'ng-apexcharts';
@Component({
  selector: 'app-view-budget',
  templateUrl: './view-budget.component.html',
  styleUrls: ['./view-budget.component.css']
})
export class ViewBudgetComponent implements OnInit {

  chartSeries: ApexNonAxisChartSeries = [40, 32, 28, 55];

  chartDetails: ApexChart = {
    type: 'pie',
    toolbar: {
      show: true
    }
  };

  chartLabels = ["Housing", "Food", "Transportation", "Daily Spending"];

  chartTitle: ApexTitleSubtitle = {
    text: 'Expense Breakdown',
    align: 'center'
  };

  chartDataLabels: ApexDataLabels = {
    enabled: true
  };

  constructor() { }

  ngOnInit(): void {
  }

  
}
