import { NgModule } from '@angular/core';
import { ContadorCompononent } from './contador/contador.component';

@NgModule({

    declarations: [
        ContadorCompononent,
      ],
      exports: [
          ContadorCompononent,
      ],
      imports: [
      ]

})
export class ContadorModule {}