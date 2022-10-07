import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgApexchartsModule } from 'ng-apexcharts';

import { AppComponent } from './app.component';

import { PaymentsPageComponent } from './payments-page/payments-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';


import { FormsModule } from '@angular/forms';
import { LoanCalculatorComponent } from './loan-calculator/loan-calculator.component';


import { CreateAccountComponent } from './create-account/create-account.component';
import { UpdatePasswordPageComponent } from './update-password-page/update-password-page.component';


@NgModule({

  declarations: [
    AppComponent,
    PaymentsPageComponent,
    LandingPageComponent,
    CreateAccountComponent,
    LoanCalculatorComponent,
    UpdatePasswordPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgApexchartsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
