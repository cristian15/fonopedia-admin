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
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';


import { PatologiaComponent } from './patologia/patologia.component';
import { AgregarPatologiaComponent } from './agregar-patologia/agregar-patologia.component';

import { FormsModule } from '@angular/forms';
import { EnviarSubscripcionComponent } from './enviar-subscripcion/enviar-subscripcion.component';
import { PaginacionComponent } from '../share/paginacion/paginacion.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ADMIN_ROUTES,
    ShareModule,
    PipesModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatFormFieldModule
  ],
  declarations: [
    InicioComponent,
    PatologiasComponent,
    SubcritosComponent,
    PatologiaComponent,
    AgregarPatologiaComponent,
    EnviarSubscripcionComponent,
    PaginacionComponent
  ]
})
export class AdministradorModule { }
