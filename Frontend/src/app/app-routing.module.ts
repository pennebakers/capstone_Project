import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home-page/home.component';
import { CreateBudgetComponent } from './create-budget/create-budget.component';
import { ViewBudgetComponent } from './view-budget/view-budget.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { CommonModule } from '@angular/common';
import { PaymentsPageComponent } from './payments-page/payments-page.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { LoanCalculatorComponent } from './loan-calculator/loan-calculator.component';
import { SavingsCalculatorComponent } from './savings-calculator/savings-calculator.component';
import { LandingPageComponent } from './landing-page/landing-page.component';



const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'fundingforce/registration', component: CreateAccountComponent},
    {path: 'fundingforce/home', component: HomeComponent},
    {path: 'create-budget', component: CreateBudgetComponent},
    {path: 'view-budget', component: ViewBudgetComponent},
    {path: 'fundingforce/login', component: UserLoginComponent},
    {path: 'loan-calculator', component: LoanCalculatorComponent},
    {path: 'savings-calculator', component: SavingsCalculatorComponent},
    {path: 'payments', component:PaymentsPageComponent}
  ];

 @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    })
 export class AppRoutingModule {}







