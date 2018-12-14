import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/service.index';
import { Usuario } from 'src/app/models/usuario.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  email: string;
  password: string;
  recuerdame = true;
  constructor(private _usuarioService: UsuarioService, public router: Router) { }

  ngOnInit() {
    this.email = localStorage.getItem('email') || '';
        if (this.email.length > 3) {
            this.recuerdame = true;
        }
  }

  login(){
    console.log(this.email);
    const usuario = new Usuario( null, this.email, this.password );
    this._usuarioService.login(usuario, this.recuerdame ).then(() => this.router.navigate(['/']));
  }

}
