import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import * as $ from 'jquery';
import { Routes, RouterModule } from '@angular/router';
import { BlankComponent } from './layouts/blank/blank.component';
import { LoginComponent } from './autenticacion/login/login.component';
import { RegistrarComponent } from './autenticacion/registrar/registrar.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AutenticacionModule } from './autenticacion/autenticacion.module';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { appRoutes } from './app.routes';
import { AdministradorModule } from './administrador/administrador.module';
import { ServiceModule } from './services/service.module';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    ServiceModule,
    RouterModule.forRoot(appRoutes, {useHash: false}),
    BrowserAnimationsModule,
    AutenticacionModule,
    AdministradorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
