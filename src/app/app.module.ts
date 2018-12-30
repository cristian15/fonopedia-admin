import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import * as $ from 'jquery';
import { Routes, RouterModule } from '@angular/router';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AutenticacionModule } from './autenticacion/autenticacion.module';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { appRoutes } from './app.routes';
import { AdministradorModule } from './administrador/administrador.module';
import { ServiceModule } from './services/service.module';
import { ShareModule } from './share/share.module';
import { NavbarComponent } from './share/navbar/navbar.component';
import { UploadService } from './services/service.index';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    ServiceModule,
    RouterModule.forRoot(appRoutes, {useHash: true}),
    BrowserAnimationsModule,
    AutenticacionModule,
    AdministradorModule,
    ShareModule
  ],
  providers: [
    UploadService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
