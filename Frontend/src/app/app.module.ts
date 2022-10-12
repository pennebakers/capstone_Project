import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';

import { HomeComponent } from './home-page/home.component';
import { CreateBudgetComponent } from './create-budget/create-budget.component';
import { ViewBudgetComponent } from './view-budget/view-budget.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UserLoginComponent } from './user-login/user-login.component';


import { PaymentsPageComponent } from './payments-page/payments-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';


import { FormsModule } from '@angular/forms';
import { LoanCalculatorComponent } from './loan-calculator/loan-calculator.component';


import { CreateAccountComponent } from './create-account/create-account.component';
import { UpdatePasswordPageComponent } from './update-password-page/update-password-page.component';

import { SavingsCalculatorComponent } from './savings-calculator/savings-calculator.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({

  declarations: [
    AppComponent,
    HomeComponent,
    CreateBudgetComponent,
    ViewBudgetComponent,
    UserLoginComponent,
    PaymentsPageComponent,
    LandingPageComponent,
    CreateAccountComponent,
    LoanCalculatorComponent,
    SavingsCalculatorComponent,
    LoanCalculatorComponent,
    UpdatePasswordPageComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgApexchartsModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
