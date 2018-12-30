import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagenUsuarioPipe } from './imagen-usuario.pipe';
import { ImagenPipe } from './imagen.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ImagenUsuarioPipe,
    ImagenPipe
  ],
  exports:[
    ImagenUsuarioPipe,
    ImagenPipe
  ]
})
export class PipesModule { }
