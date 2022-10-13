import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Budget } from '../budget';
import { BudgetService } from '../budget.service';

@Component({
  selector: 'app-create-budget',
  templateUrl: './create-budget.component.html',
  styleUrls: ['./create-budget.component.css']
})
export class CreateBudgetComponent implements OnInit {

  budget: Budget = new Budget();
  constructor(private budgetService: BudgetService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveBudget(){
    this.budgetService.createBudget(this.budget).subscribe( data =>{
      console.log(data);
      this.goToBudgetList();
    },
    error => console.log(error));
  }

  goToBudgetList(){
    this.router.navigate(['/payments']);
  }
  
  onSubmit(){
    console.log(this.budget);
    this.budget.lastAmountPaid = 0;
    this.saveBudget();
  }

}
