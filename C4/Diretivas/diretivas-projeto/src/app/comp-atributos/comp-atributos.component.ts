import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-atributos',
  templateUrl: './comp-atributos.component.html',
  styleUrls: ['./comp-atributos.component.css']
})
export class CompAtributosComponent implements OnInit {

  estilo: string = "disable"
  corFundo: string = ""
  corFonte: string = ""
  item: string = ""
  lista: string[] = []
  isEnableFinish: boolean = true

  constructor() { }

  adicionarLista() {
    this.lista.push(this.item)
  }

  ngOnInit(): void {
  }

  trocar() {
    if (this.estilo === 'disable') {
      this.estilo = 'enable'
      this.corFundo = 'blue'
      this.corFonte = 'white'
    } else {
      this.estilo = 'disable'
      this.corFundo = 'red'
      this.corFonte = 'yellow'
    }
  }

}
