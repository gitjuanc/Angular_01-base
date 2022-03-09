import {Component} from '@angular/core'

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html',
  })

export class HeroeCompononent {

  nombre: string = "Ironman";
  edad: number = 45;

  get nombreCapitalizado() {
    return this.nombre.toUpperCase();
  }

  obtenerNombre(): string {
    return `${this.nombre } - ${ this.edad }`;
  }

  cabiarNombre(): void {
    this.nombre = "SpiderMan";
  }

  cabiarEdad(): void {
    this.edad = 25;
  }

}