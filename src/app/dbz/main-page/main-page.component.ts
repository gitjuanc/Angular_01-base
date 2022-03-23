import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent{

  personajes: Personaje[] = [
    {
      nombre: "Krillin",
      poder: 700
    },
    {
      nombre: "Goku",
      poder:  15000
    }    
  ];

  agregarNuevoPersonaje(event:Personaje){
    this.personajes.push(event);
  }

  constructor( private dbzService: DbzService){

  }

}
