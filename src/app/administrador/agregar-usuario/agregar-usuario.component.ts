import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/service.index';
import { UsuariosComponent } from '../usuarios/usuarios.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordValidation } from 'src/app/validations/password-validation';
import swal from 'sweetalert2';

@Component({
  selector: 'app-agregar-usuario',
  templateUrl: './agregar-usuario.component.html'
})
export class AgregarUsuarioComponent implements OnInit {

  myForm: FormGroup;
  constructor(private modalService: NgbModal
    , private _usuarioService: UsuarioService
    , private _usuariosComponent: UsuariosComponent
    , public fb: FormBuilder) { }

  nombre: string;
  email: string;
  pass: string;

  ngOnInit() {

    this.myForm = this.fb.group({
      nombre:     ['', [Validators.required]],
      email:      ['', [Validators.required, Validators.email]],
      password:   ['', [Validators.required, Validators.minLength(4)]],
      confirmPassword:   ['', [Validators.required]],
    },{
      validator: PasswordValidation.MatchPassword // your validation method
    }
    );
  }

  open(content) {
    this.modalService.open(content, { size: 'lg' });
  }


  guardar(c){
    if(this._usuariosComponent.usuarios.find(e => e.email === this.myForm.controls.email.value)){
      swal('Error al crear Usuario', `'${this.myForm.controls.email.value}' ya existe`, 'error');
    }
    else{
      let newUser: Usuario={
        nombre: this.myForm.controls.nombre.value,
        password: this.myForm.controls.password.value,
        email: this.myForm.controls.email.value,
        role: 'ADMIN_ROLE',
        img: ''
      };
      this._usuarioService.crearUsuario(newUser).subscribe(res=>{
        this._usuariosComponent.load()
       this.myForm.reset();
      });
      c.close();
    }
    
  }
}
