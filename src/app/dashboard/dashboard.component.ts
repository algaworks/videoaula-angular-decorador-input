import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  lista: Array<any> = [
    { nome: 'Ana' },
    { nome: 'Priscila' },
    { nome: 'Thiago' },
    { nome: 'Eduardo' },
    { nome: 'Junior' },
    { nome: 'Igor' },
    { nome: 'Alexandre' },
  ];

  constructor() { }

  ngOnInit() {
  }

  get clientesLista() {
    return this.lista;
  }

}
