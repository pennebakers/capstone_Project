import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApexChart, ApexDataLabels, ApexNonAxisChartSeries, ApexTitleSubtitle } from 'ng-apexcharts';
import { Budget } from '../budget';
import { BudgetService } from '../budget.service';
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


  id!: number;
  budget: any = {};
  constructor(private budgetService: BudgetService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['budgetId'];

    this.budgetService.getBudgetByID(this.id).subscribe(data => {
      this.budget = data;
      console.log(this.budget);
    }, error => console.log(error));
  }

 

  
}
