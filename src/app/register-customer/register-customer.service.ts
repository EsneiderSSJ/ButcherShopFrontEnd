import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { Constantes } from '../servicios';
import { Customer } from './customer.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterCustomerService {
  constructor(private http: HttpClient) { }

  public obtenerTodoLosClientes(): Observable <any>{
    return this.http.get(Constantes.services.customer);
  }

  public save(customer: Customer): Observable<any>{
   return this.http.post(Constantes.services.customer,customer);
  }
}
