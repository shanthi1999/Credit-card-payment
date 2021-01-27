import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MakePaymentComponent } from './components/home/make-payment/make-payment.component';
import { PaymentFormComponent } from './components/payment-form/payment-form.component';
import { PostComponent } from './components/post/post.component';

const routes: Routes = [
  {
    path:'',
    component: MakePaymentComponent
  },
  {
    path:'payment',
    component: PaymentFormComponent
  },
  {
    path:'post',
    component:PostComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
