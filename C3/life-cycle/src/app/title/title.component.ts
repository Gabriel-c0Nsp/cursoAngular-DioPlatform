import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit, OnChanges {

  @Input() nome: string = ''

  constructor() {
    console.log(`Eu sou o construtor (Construtor ${this.nome})`)
  }

  ngOnInit(): void {
    this.nome = `Olá, eu sou o ${this.nome}`
    console.log(`OnInit (estou iniciando ${this.nome})`)
  }

  ngOnChanges(): void {
  console.log(`OnChanges (estou passando por mudanças ${this.nome})`)
  }

}
