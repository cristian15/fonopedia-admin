import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioService } from '../services/service.index';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
  ],
  exports:[
  ],
  providers:[
    UsuarioService
  ]
})
export class ShareModule { }
