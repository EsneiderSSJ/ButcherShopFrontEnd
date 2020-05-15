import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterCustomerComponent } from './register-customer/register-customer.component';
import { RegisterCostumerModule } from './register-customer/register-customer.module';
import { ListCustomersComponent } from './list-customers/list-customers.component';
import { ListCustomersModule } from './list-customers/list-customers.module';


const routes: Routes = [ 
  {
    path: 'clientes',
    component: ListCustomersComponent
  },
{
  path: '**',
  component: RegisterCustomerComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes), RegisterCostumerModule, ListCustomersModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
