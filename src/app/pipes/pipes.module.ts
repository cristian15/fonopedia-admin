import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagenUsuarioPipe } from './imagen-usuario.pipe';
import { ImagenPipe } from './imagen.pipe';
import { TruncarPipe } from './truncar.pipe';
import { SearchPipe } from './search.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ImagenUsuarioPipe,
    ImagenPipe,
    TruncarPipe,
    SearchPipe
  ],
  exports:[
    ImagenUsuarioPipe,
    ImagenPipe,
    TruncarPipe,
    SearchPipe
  ]
  
})
export class PipesModule {
 
 }
