import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Customer } from '../../model/customer.model';
import { AppState } from '../../../app.state';
import { PaymentService } from 'src/app/service/payment.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  // @Input() messages:number | undefined
  @Input() messages:Customer | undefined

  

formData: Customer[]=[
  { cardNumbers:1234567890123456,
    cardNames:"shanthi",
    cardExpiry:"11/2022",
    cardCcv:334,
    cardAmount:2000 }
];

  constructor(private paymentService: PaymentService){}
  // customers:Observable<Customer[]>

  // constructor(private store:Store<AppState>) {
  //   // this.customers = store.select('customer')
  //  }

  ngOnInit() {
    this.paymentService.payment$
    .subscribe(details=>{
      this.formData = [...this.formData,details]
      console.log(this.formData)
      console.log(details.cardAmount)
    })
  }

}
