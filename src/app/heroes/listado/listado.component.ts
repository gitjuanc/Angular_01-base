import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent{

  heroes: string[] = ["IronMan", "Thor", "hulk", "SpiderMan", "Capitan America"]
  heroeBorrado: string = "";


  borrarHeroe(){

    this.heroeBorrado = this.heroes.shift() || "";
     
  }

}
