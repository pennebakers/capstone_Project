import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgApexchartsModule } from 'ng-apexcharts';

import { AppComponent } from './app.component';
<<<<<<< HEAD
import { PaymentsPageComponent } from './payments-page/payments-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
=======

import { FormsModule } from '@angular/forms';
import { LoanCalculatorComponent } from './loan-calculator/loan-calculator.component';

>>>>>>> 90796c6bd72907d1e8a56da3ffcd89296510423d
import { CreateAccountComponent } from './create-account/create-account.component';


@NgModule({
<<<<<<< HEAD
  declarations: [
    AppComponent,
    PaymentsPageComponent,
    LandingPageComponent,
    CreateAccountComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
=======
  declarations: [AppComponent, LoanCalculatorComponent, CreateAccountComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, NgApexchartsModule],
>>>>>>> 90796c6bd72907d1e8a56da3ffcd89296510423d
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
