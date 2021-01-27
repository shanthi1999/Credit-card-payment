import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PaymentFormComponent } from './components/payment-form/payment-form.component';
import { MakePaymentComponent } from './components/home/make-payment/make-payment.component';
import { PostComponent } from './components/post/post.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr'
import { StoreModule } from '@ngrx/store';
import { reducer } from './reducer/customer.reducer';
import { Customer } from '../app/model/customer.model';


@NgModule({
  declarations: [
    AppComponent,
    PaymentFormComponent,
    MakePaymentComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({})
    // StoreModule.forRoot(
    //   {customer:reducer}
    // )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
