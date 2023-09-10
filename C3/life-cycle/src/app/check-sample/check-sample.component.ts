import {
  Component,
  OnInit,
  DoCheck,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  AfterContentInit,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-check-sample',
  templateUrl: './check-sample.component.html',
  styleUrls: ['./check-sample.component.css']
})
export class CheckSampleComponent
implements OnInit,
           DoCheck,
           AfterContentChecked,
           AfterContentInit,
           AfterViewChecked,
           AfterViewInit,
           OnDestroy{

  quantidade: number = 0

  constructor() { }

  adicionar() {
    this.quantidade = this.quantidade + 1
  }

  subtrair() {
    this.quantidade = this.quantidade - 1
  }

  // checked -> content -> view

  // executa apenas uma vez
  ngOnInit(): void {
    console.log('OnInit')
  }

  // executa apenas uma vez
  ngDoCheck(): void {
    console.log('DoCheck')
  }


  // quando o primeiro conteúdo é iniciado
  ngAfterContentInit(): void {
    console.log('AfterContentInit')
  }


  // depois da inicialização da view
  ngAfterViewInit(): void {
    console.log('AfterViewInit')
  }

  // após alguma alteração, verifica o conteúdo
  ngAfterContentChecked(): void {
    console.log('AfterContentChecked')
  }

  // após alguma alteração, verifica a view
  ngAfterViewChecked(): void {
    console.log('AfterViewChecked')
  }

  ngOnDestroy(): void {
    console.log('Goodbye my friend!')
  }
}
