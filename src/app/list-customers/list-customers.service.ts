import { Injectable } from '@angular/core';
import { Customer } from '../register-customer/customer.model';
import { Constantes } from '../servicios';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListCustomerService {

  constructor(private http: HttpClient) { }
  public obtenerCustomers(): Observable<Customer[]>{
    return this.http.get<Customer[]>(Constantes.services.customer);
  }
  
  public obtenerCustomerPorId(id:number): Observable<Customer>{
    return this.http.get<Customer>(Constantes.services.customer);
  }

  public delete(id:number){
    console.log(`${Constantes.services.customer}/${id}`)
    return this.http.delete(`${Constantes.services.customer}/${id}`);
  }
}

