import { Injectable } from '@angular/core';
import { Costumer } from '../register-costumer/costumer.model';
import { Constantes } from '../servicios';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListCustomerService {

  constructor(private http: HttpClient) { }
  public obtenerClientes(): Observable<Costumer[]>{
    return this.http.get<Costumer[]>(Constantes.services.cliente);
  }
  public obtenerClientePorId(id:number): Observable<Costumer>{
    return this.http.get<Costumer>(Constantes.services.cliente);
  }

  public delete(id:number){
    console.log(`${Constantes.services.cliente}/${id}`)
    return this.http.delete(`${Constantes.services.cliente}/${id}`);
  }
}

