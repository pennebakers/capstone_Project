import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faTurkishLira } from '@fortawesome/free-solid-svg-icons';
import { Budget } from '../budget';
import { BudgetService } from '../budget.service';

@Component({
  selector: 'app-payments-page',
  templateUrl: './payments-page.component.html',
  styleUrls: ['./payments-page.component.css']
})
export class PaymentsPageComponent implements OnInit {

  budgets: Budget[] | undefined;

  constructor(private budgetService: BudgetService, private router: Router) { }

  ngOnInit(): void {
    this.getBudgetsList();
  }

  getBudgetsList(){
    this.budgetService.getBudgets().subscribe(data => {
      this.budgets = data;
    })
  }

  deleteBudgetByID(budget_id: number){
    this.budgetService.deleteBudget(budget_id).subscribe(data => {
      this.getBudgetsList();
    })
  }

}
