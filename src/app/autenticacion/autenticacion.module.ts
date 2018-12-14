import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { LoginComponent } from './login/login.component';
import { RegistrarComponent } from './registrar/registrar.component';

import {MatInputModule} from '@angular/material/input';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';


import {FormsModule} from '@angular/forms';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { UsuarioService } from '../services/service.index';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule,
  ],
  declarations: [
    LoginComponent,
    RegistrarComponent
  ],
  providers:[
    UsuarioService,
    JwtHelperService,
    AuthService,
    AuthGuardService
  ]
})
export class AutenticacionModule { }
