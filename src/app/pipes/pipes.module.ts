import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagenUsuarioPipe } from './imagen-usuario.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ImagenUsuarioPipe
  ],
  exports:[
    ImagenUsuarioPipe
  ]
})
export class PipesModule { }
