import { Injectable } from '@angular/core';
import { Subject} from 'rxjs';
import { Customer } from '../model/customer.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private paymentSource = new Subject<Customer>();
  payment$ = this.paymentSource.asObservable()
  constructor() { }

  sendPaymentDetails(details:Customer){
    this.paymentSource.next(details)
  }
}
