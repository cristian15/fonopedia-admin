import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/service.index';
import swal from 'sweetalert2';
import { load } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html'
})
export class UsuariosComponent implements OnInit {

  usuarios = [];
  rows = [];
  constructor(private _usuarioService: UsuarioService) { }

  ngOnInit() {
    this.load();
  }
  public load(){
    this._usuarioService.obtenerUsuarios().subscribe(res => {
      this.usuarios = res;
      this.rows = res;
    })
  }

  borrar(u){
    console.log(u);
    if(u._id == this._usuarioService.usuario._id){
      swal(
        'Proceso Cancelado',
        'Usuario en uso',
        'error'
    );
    }
    else{
      swal({
        title: '¿Seguro de eliminar?'+ u.email,
        text: 'No se podrá recuperar luego de eliminado ',
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si',
        cancelButtonText: 'No'
          }).then((result) => {
              if (result.value) {
                this._usuarioService.eliminarUsuario(u).subscribe(res =>{
                  console.log(res);
                  swal(
                      'Eliminado!',
                      'Administrador ha sido eliminado',
                      'success'
                  );
  
                  this.load();
                });
                   
                  
              } else if (result.dismiss === swal.DismissReason.cancel) {
                  swal(
                      'Proceso Cancelado',
                      'Administrador NO eliminado',
                      'error'
                  );
              }
          });
    }
    }
    

}
