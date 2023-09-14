import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(private activeRoute: ActivatedRoute, private navegador: Router) {
    // para recuperar da seguinte forma: http://localhost:4200/portifolio/1
    this.activeRoute.params.subscribe(
      response => (console.log(response))
    )

    this.activeRoute.firstChild?.params.subscribe(
      response => (console.log(response))
    )

    // para recuperar da seguinte forma: http://localhost:4200/portifolio/1?{name=gabriel&token=123}
    this.activeRoute.queryParams.subscribe(
      response => (console.log(response))
    )
  }

  ngOnInit(): void {
    setInterval(()=>{
      this.navegador.navigate(['/'])
    }, 5000)
  }

}
