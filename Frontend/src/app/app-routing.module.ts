import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home-page/home.component';
import { CreateBudgetComponent } from './create-budget/create-budget.component';
import { ViewBudgetComponent } from './view-budget/view-budget.component';
import { CommonModule } from '@angular/common';


const routes: Routes = [
                          
                          {path: '', component: HomeComponent},
                          {path: 'create-budget', component: CreateBudgetComponent},
                          {path: 'view-budget', component: ViewBudgetComponent},
                          
                      ];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
