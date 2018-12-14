import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { UsuarioService } from 'src/app/services/service.index';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  jwt = new JwtHelperService();
  constructor( public _usuarioService: UsuarioService, public router: Router) { }

  canActivate(): boolean {
    /* if (!this.auth.isAuthenticated()) {
      this.router.navigate(['login']);
      return false;
    }
    return true; */
    if (this._usuarioService.estaLogueado() && !this.jwt.isTokenExpired(this._usuarioService.token)) {
      console.log('Paso LoginGuard');
      return true;
  } else {
      console.log('Bloqueado por LoginGuard');
      this._usuarioService.logout();
      return false;
  }
  }
}
