import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { ShareModule } from '../share/share.module';
import { PipesModule } from '../pipes/pipes.module';
import { PatologiasComponent } from './patologias/patologias.component';
import { SubcritosComponent } from './subcritos/subcritos.component';
import { ADMIN_ROUTES } from './administrador.routes';
import { RouterModule } from '@angular/router';

import {MatTableModule} from '@angular/material/table';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ADMIN_ROUTES,
    ShareModule,
    PipesModule,
    MatTableModule
  ],
  declarations: [
    InicioComponent,
    PatologiasComponent,
    SubcritosComponent
  ]
})
export class AdministradorModule { }
