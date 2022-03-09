import {Component} from '@angular/core'

@Component({
    selector: 'app-contador',
    template: `<h1>{{titulo}}</h1>

    <h2>La base es: <strong>{{base}}</strong></h2>
    
    <button (click)="acumular( base )"> + {{base}}</button>
    
    <span> {{numero}} </span>
    
    <button (click)="acumular( -base )"> - {{base}}</button>`
  })

export class ContadorCompononent {

    titulo: string = 'Contador APP';
  numero: number = 10;
  base: number = 5;

/*   sumar() {
    this.numero= this.numero + 1;
  }

  restar() {
    this.numero= this.numero - 1;
  } */

  acumular(valor: number) {
    this.numero = this.numero + valor;
  }

}