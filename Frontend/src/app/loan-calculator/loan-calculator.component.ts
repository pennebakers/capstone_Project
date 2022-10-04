import { Component, OnInit } from '@angular/core';
import { ApexChart, ApexDataLabels, ApexNonAxisChartSeries, ApexTitleSubtitle } from 'ng-apexcharts';

@Component({
  selector: 'app-loan-calculator',
  templateUrl: './loan-calculator.component.html',
  styleUrls: ['./loan-calculator.component.css']
})
export class LoanCalculatorComponent implements OnInit {

  chartSeries: ApexNonAxisChartSeries = [0,0];

  chartDetails: ApexChart = {
    type: 'donut',
    toolbar:{
      show: true
    }
  };

chartLabels = ["Total Payment","Interest"];
chartTitle: ApexTitleSubtitle = {text: 'Chart Breakdown',
  align: 'left'

};

chartDataLabels: ApexDataLabels = {
  enabled: true
}

title: string = "Loan Calculator"
  constructor() { }

  ngOnInit(): void {

  }

  public num1!:number;
  public num2!:number;
  public num3!:number;
  public topNumber?:number
  public botNumber?:number
  public m?:number;
  public i?:number;
  public payment?: number;

    cal(){
    this.m = this.num3*12;
    this.i = this.num2/100/12;
    this.topNumber = this.num1*this.i*Math.pow((1+this.i),this.m)
    this.botNumber =  Math.pow((1+this.i),this.m)-1;
    this.payment = Math.round(100*(this.topNumber / this.botNumber))/100;
    return this.chartSeries = [Math.round(100*(this.payment*this.m))/100,Math.round(100*(this.payment*this.m-this.num1))/100];
    }

}
