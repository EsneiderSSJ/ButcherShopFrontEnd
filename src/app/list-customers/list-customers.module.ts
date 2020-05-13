import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCustomersComponent } from './list-customers.component';
import { MaterialModule } from '../material.modules';



@NgModule({
  declarations: [ListCustomersComponent],
  imports: [
    CommonModule, MaterialModule
  ]
})
export class ListCustomersModule { }
