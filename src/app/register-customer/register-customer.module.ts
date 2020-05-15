import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterCustomerComponent } from './register-customer.component';
import { MaterialModule } from '../material.modules';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [RegisterCustomerComponent],
  imports: [
    CommonModule,MaterialModule,HttpClientModule
  ],
  exports: [
    RegisterCustomerComponent
   
  ]
})
export class RegisterCostumerModule { }
