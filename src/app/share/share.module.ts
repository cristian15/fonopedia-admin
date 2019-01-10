import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioService } from '../services/service.index';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    PipesModule
  ],
  declarations: [
  ],
  exports:[
  ],
  providers:[
    UsuarioService,
    PipesModule
  ]
})
export class ShareModule { }
