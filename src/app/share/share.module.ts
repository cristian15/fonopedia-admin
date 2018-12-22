import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { UsuarioService } from '../services/service.index';
import { RouterModule } from '@angular/router';
import { appRoutes } from '../app.routes';

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
