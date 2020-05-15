import { Component, OnInit } from '@angular/core';
import { FormBuilder, Form, FormGroup, FormControl, Validators } from '@angular/forms';
import { Builder } from 'protractor';
import { Costumer } from './costumer.model';
import { RegisterCostumerService } from './register-costumer.service';

@Component({
  selector: 'app-register-costumer',
  templateUrl: './register-costumer.component.html',
  styleUrls: ['./register-costumer.component.scss']
})
export class RegisterCostumerComponent implements OnInit {

  formCliente: FormGroup;
  cliente:Costumer;
  constructor(private formBuilder: FormBuilder, 
              private clienteService:RegisterCostumerService) { }

  ngOnInit(): void {
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
    });
  }

}
