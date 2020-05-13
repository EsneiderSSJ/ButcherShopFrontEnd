import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { Constantes } from '../servicios';
import { Costumer } from './costumer.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterCostumerService {
  constructor(private http: HttpClient) { }

  public obtenerTodoLosClientes(): Observable <any>{
    return this.http.get(Constantes.services.cliente);
  }

  public save(cliente: Costumer): Observable<any>{
   return this.http.post(Constantes.services.cliente,cliente);
  }
}
