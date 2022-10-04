import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoanCalculatorComponent } from './loan-calculator/loan-calculator.component';

const routes: Routes = [{ path: 'loan', component: LoanCalculatorComponent }];

import { CreateAccountComponent } from './create-account/create-account.component';


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
