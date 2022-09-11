import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { Config } from '../interfaces/config'
import { Payment } from '../interfaces/payment'

//This is the structure of the Json data





@Injectable()
export class ConfigService {
  configUrl = 'assets/config.json';
  getPaymentUrl = 'http://localhost:8007/payment/get/1?username=aaa'

  constructor(private http: HttpClient) { }

  getConfig() {
    return this.http.get<Config>(this.configUrl);
  }

  getPayment() {
    return this.http.get<Payment>(this.getPaymentUrl);
  }

}

