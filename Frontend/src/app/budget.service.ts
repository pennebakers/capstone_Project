import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Budget } from './budget';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  private baseURL="http://localhost:8080/fundingforce/budget"
  constructor(private httpClient: HttpClient) { }

  getBudgetsByCustomerID(customers_customer_id: number): Observable<Budget[]>{
    return this.httpClient.get<Budget[]>(`${this.baseURL}/${customers_customer_id}`);
  }

  getBudgetByID(budgetId: number): Observable<Budget[]>{
    return this.httpClient.get<Budget[]>(`${this.baseURL}/${budgetId}`);
  }

  getBudgets(): Observable<Budget[]>{
    return this.httpClient.get<Budget[]>(`${this.baseURL}`);
  }

  createBudget(budget: Budget): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, budget);
  }

  updateBudget(budget_id: number, budget: Budget): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${budget_id}`, budget);
  }

  deleteBudget(budget_id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${budget_id}`);
  }
}
