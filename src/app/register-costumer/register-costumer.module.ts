import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterCostumerComponent } from './register-costumer.component';
import { MaterialModule } from '../material.modules';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [RegisterCostumerComponent],
  imports: [
    CommonModule,MaterialModule,HttpClientModule
  ],
  exports: [
   RegisterCostumerComponent
   
  ]
})
export class RegisterCostumerModule { }
