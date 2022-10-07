import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-savings-calculator',
  templateUrl: './savings-calculator.component.html',
  styleUrls: ['./savings-calculator.component.css']
})
export class SavingsCalculatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public balance!: number
  public monthlyContribution!: number;
  public years!: number;
  public apy!: number;
  public sum!: number;

      cal(){
      this.sum = this.balance*(1+(this.apy/12))*(this.years) + (this.monthlyContribution*(1+(this.apy/12)-1)/ this.apy/12)
      return this.sum = Math.round(100*(this.sum))/100;
      }
    
      
  
}

