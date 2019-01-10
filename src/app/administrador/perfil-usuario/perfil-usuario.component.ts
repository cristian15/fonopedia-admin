import { Component, OnInit } from '@angular/core';
import { UsuarioService, UploadService } from 'src/app/services/service.index';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html'
})
export class PerfilUsuarioComponent implements OnInit {

  constructor(public _usuario: UsuarioService, private _upload: UploadService) { }

  ngOnInit() {
  }

  cambiarImagen(event) {
    const nuevaImagen = event.target.files[0];
    this._upload.eliminarArchivo(this._usuario.usuario.img).subscribe();
    this._upload.subirArchivoRuta(nuevaImagen,'usuarios',this._usuario.usuario._id).subscribe(res => {
        let respuesta = <any>{};
        respuesta = res;
        this._usuario.usuario.img = 'usuarios/'+this._usuario.usuario._id+'/'+respuesta.archivos[0]
        this._usuario.actualizarUsuario(this._usuario.usuario).subscribe(res => {
            let user = <any>{};
            user = res;
            this._usuario.usuario = user.usuario;
        });
    });

}

}
