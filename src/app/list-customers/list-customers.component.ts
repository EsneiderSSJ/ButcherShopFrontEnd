import { Component, OnInit } from '@angular/core';
import { ListCustomerService } from './list-customer.service';
import { Costumer } from '../register-costumer/costumer.model';
import { RegisterCostumerComponent } from '../register-costumer/register-costumer.component';

@Component({
  selector: 'app-list-customers',
  templateUrl: './list-customers.component.html',
  styleUrls: ['./list-customers.component.scss']
})
export class ListCustomersComponent implements OnInit {
  public customers: Costumer[];
  public dataSource = new MatTableDataSource<Costumer>(this.customers);
  public displayedColumns: string[] = ['id', 'nombre', 'apellido', 'email'
    , 'direccion', 'telefono', 'Acciones'];
  constructor(private listCustomers:ListCustomerService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.cargarDatos();
  }
  public cargarDatos() {
    this.listCustomers.obtenerClientes().subscribe(response => {
      this.customers = response;
      this.dataSource.data = this.customers;
    })
  }
  verCliente(id: number) {
    console.log(id)
    var cliente: Cliente = null;
    this.listCustomers.obtenerClientePorId(id).subscribe(
      response => {
        console.log(response);
        console.log('abrio el dialog');
        const dialogRef = this.dialog.open(RegisterCostumerComponent, {
          width: '60%',
          height: '420px',
          data: response
        });
        console.log(id);
        cliente = response;
      })
  }
  public delete(id: number) {
    this.listCustomers.delete(id);
    console.log('elimino')
    this.cargarDatos();
  }
}
