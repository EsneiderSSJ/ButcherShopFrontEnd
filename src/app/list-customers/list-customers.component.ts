import { Component, OnInit } from '@angular/core';
import { ListCustomerService } from './list-customers.service';
import { Customer } from '../register-customer/customer.model';
import { RegisterCustomerComponent } from '../register-customer/register-customer.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-list-customers',
  templateUrl: './list-customers.component.html',
  styleUrls: ['./list-customers.component.scss']
})
export class ListCustomersComponent implements OnInit {
  public customers: Customer[];
  public dataSource = new MatTableDataSource<Customer>(this.customers);
  public displayedColumns: string[] = ['id', 'nombre', 'apellido', 'email'
    , 'direccion', 'telefono', 'Acciones'];
  constructor(private listCustomers:ListCustomerService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.cargarDatos();
  }
  public cargarDatos() {
    this.listCustomers.obtenerCustomers().subscribe(response => {
      this.customers = response;
      this.dataSource.data = this.customers;
    })
  }
  verCustomer(id: number) {
    console.log(id)
    var customers: Customer = null;
    this.listCustomers.obtenerCustomerPorId(id).subscribe(
      response => {
        console.log(response);
        console.log('abrio el dialog');
        const dialogRef = this.dialog.open(RegisterCustomerComponent, {
          width: '60%',
          height: '420px',
          data: response
        });
        console.log(id);
        customers = response;
      })
  }
  public delete(id: number) {
    this.listCustomers.delete(id).subscribe(response=>{
      console.log(response);
      console.log('elimino')
    this.cargarDatos();
    });
    
  }
}
