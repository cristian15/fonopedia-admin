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

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EnviarSubscripcionComponent } from './enviar-subscripcion/enviar-subscripcion.component';
import { PaginacionComponent } from '../share/paginacion/paginacion.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { AgregarUsuarioComponent } from './agregar-usuario/agregar-usuario.component';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import {NgxWigModule} from 'ngx-wig';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ADMIN_ROUTES,
    ShareModule,
    PipesModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatFormFieldModule,
    ChartsModule,
    NgxWigModule
    
  ],
  declarations: [
    InicioComponent,
    PatologiasComponent,
    SubcritosComponent,
    PatologiaComponent,
    AgregarPatologiaComponent,
    EnviarSubscripcionComponent,
    PaginacionComponent,
    UsuariosComponent,
    AgregarUsuarioComponent,
    PerfilUsuarioComponent
  ]
})
export class AdministradorModule { }
