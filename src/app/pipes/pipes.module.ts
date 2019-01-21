import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagenUsuarioPipe } from './imagen-usuario.pipe';
import { ImagenPipe } from './imagen.pipe';
import { TruncarPipe } from './truncar.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ImagenUsuarioPipe,
    ImagenPipe,
    TruncarPipe
  ],
  exports:[
    ImagenUsuarioPipe,
    ImagenPipe,
    TruncarPipe
  ]
  
})
export class PipesModule {
 
 }
