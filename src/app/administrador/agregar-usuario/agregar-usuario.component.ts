import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/service.index';
import { UsuariosComponent } from '../usuarios/usuarios.component';

@Component({
  selector: 'app-agregar-usuario',
  templateUrl: './agregar-usuario.component.html'
})
export class AgregarUsuarioComponent implements OnInit {

  constructor(private modalService: NgbModal
    , private _usuarioService: UsuarioService
    , private _usuariosComponent: UsuariosComponent) { }

  nombre: string;
  email: string;
  pass: string;
  ngOnInit() {
  }

  open(content) {
    this.modalService.open(content, { size: 'lg' });
  }


  guardar(c){
    let newUser: Usuario={
      nombre: this.nombre,
      password: this.pass,
      email: this.email,
      role: 'ADMIN_ROLE',
      img: ''
    };
    this._usuarioService.crearUsuario(newUser).subscribe(res=>{this._usuariosComponent.load()});
    c.close();
  }
}
