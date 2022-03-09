import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroeCompononent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({

    declarations: [
        HeroeCompononent,
        ListadoComponent,
      ],
      exports: [
        ListadoComponent
      ],
      imports: [
        CommonModule,
      ]

})
export class HeroesModule {}