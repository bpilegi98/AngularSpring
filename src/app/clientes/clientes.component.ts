import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[] = [
    {id: 1, nombre: 'Bianca', apellido: 'Pilegi', email: 'pilegibianca@gmail.com', createAt: '2021-03-16'},
    {id: 2, nombre: 'Pepe', apellido: 'García', email: 'pgarcia@gmail.com', createAt: '2021-03-10'},
    {id: 3, nombre: 'Carlos', apellido: 'Bala', email: 'cbala@gmail.com', createAt: '2021-03-16'},
    {id: 4, nombre: 'Susana', apellido: 'Gimenez', email: 'sgimenez@gmail.com', createAt: '2021-02-16'},
    {id: 5, nombre: 'Ricardo', apellido: 'Fort', email: 'rfort@gmail.com', createAt: '2020-06-08'},
    {id: 6, nombre: 'Julian', apellido: 'Weich', email: 'jweich@gmail.com', createAt: '2018-08-28'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
