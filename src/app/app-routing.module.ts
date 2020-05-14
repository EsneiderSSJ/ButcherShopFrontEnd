import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterCostumerComponent } from './register-costumer/register-costumer.component';
import { RegisterCostumerModule } from './register-costumer/register-costumer.module';
import { ListCustomersComponent } from './list-customers/list-customers.component';
import { ListCustomersModule } from './list-customers/list-customers.module';


const routes: Routes = [ 
  {
    path: 'clientes',
    component: ListCustomersComponent
  },
{
  path: '**',
  component: RegisterCostumerComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes), RegisterCostumerModule, ListCustomersModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
