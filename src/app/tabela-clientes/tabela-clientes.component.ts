import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tabela-clientes',
  templateUrl: './tabela-clientes.component.html',
  styleUrls: ['./tabela-clientes.component.css']
})
export class TabelaClientesComponent implements OnInit {

  @Input() clientes: Array<any>;

  constructor() { }

  ngOnInit() {
  }

}
