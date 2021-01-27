import { Component, OnInit } from '@angular/core';
import { FormControl, FormArray, FormGroup,FormBuilder, Validators, AbstractControl} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PaymentService } from 'src/app/service/payment.service';
import { Customer } from '../../model/customer.model'


@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css']
})
export class PaymentFormComponent{

  paymentForm;

  constructor(private fb: FormBuilder,private toastr: ToastrService, private paymentService: PaymentService) {
    this.paymentForm=fb.group({
      "cardNumbers":['',[Validators.required,Validators.pattern('^[0-9]{16}$'),Validators.maxLength(16)]],
      "cardNames":['',[Validators.required,Validators.pattern('^[a-zA-Z]*'),Validators.maxLength(15)]],
      "cardExpiry":['',Validators.required],
       "cardCcv":['',[Validators.required,Validators.pattern('^[0-9]{3}$'),Validators.minLength(3)]],
       "cardAmount":['',[Validators.required, Validators.pattern("^((\\0?)|[1-9])?[1-9]*")]]
    })
   }
  
   submitForm(){
    if(this.paymentForm.valid){
      // this.paymentService.sendPaymentDetails(this.paymentForm.value.cardNumbers)
      this.paymentService.sendPaymentDetails(this.paymentForm.value)
      console.log(this.paymentForm.value);
      this.toastr.success("succuessfully submitted!", "card")
      this.paymentForm.reset()
  }
  else if(this.paymentForm.invalid){
    this.toastr.error("Please Enter a valid data","Card")
    console.log("not valid")
  }
   }
  
}
