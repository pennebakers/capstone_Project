import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Registration } from './registration';

@Injectable({
  providedIn: 'root',
})
export class FundingForceService {

  private baseURL = "http://localhost:8080/fundingforce/registration";

  constructor(private httpClient: HttpClient) {  }

  createAccount(registration: Registration): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, registration);
  }
  // go to the log in page
}
