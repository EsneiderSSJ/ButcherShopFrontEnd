import { Component, OnInit } from '@angular/core';
import { FormBuilder, Form, FormGroup, FormControl, Validators } from '@angular/forms';
import { Builder } from 'protractor';
import { Customer } from './customer.model';
import { RegisterCustomerService } from './register-customer.service';

@Component({
  selector: 'app-register-costumer',
  templateUrl: './register-customer.component.html',
  styleUrls: ['./register-customer.component.scss']
})
export class RegisterCustomerComponent implements OnInit {

  formCliente: FormGroup;
  cliente:Customer;
  constructor(private formBuilder: FormBuilder, 
              private clienteService:RegisterCustomerService) { }

  ngOnInit(): void {
    

    this.createdata();

  }
  public createdata (){
    this.formCliente =  this.formBuilder.group({
      name: new  FormControl('',Validators.required),
      lastname: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      telephone: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)

    });

  }

  public save(){
    this.cliente = this.formCliente.value;
    this.clienteService.save(this.cliente).subscribe(response =>{
      console.log(response)
      if(response!=null){
        alert('Cliente guardado exitosamente');
        this.createdata();
      }
    });
  }

}
