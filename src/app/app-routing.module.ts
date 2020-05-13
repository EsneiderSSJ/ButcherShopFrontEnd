import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterCostumerComponent } from './register-costumer/register-costumer.component';
import { RegisterCostumerModule } from './register-costumer/register-costumer.module';


const routes: Routes = [ 
{
  path: '**',
  component: RegisterCostumerComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes), RegisterCostumerModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
