import {Pipe, PipeTransform} from '@angular/core';
import {Usuario} from '../models/usuario.model';
import {URL_UPLOAD} from '../config/config';
import {UsuarioService} from '../services/service.index';

@Pipe({
    name: 'imagenUsuario'
})
export class ImagenUsuarioPipe implements PipeTransform {

    constructor(private _usuario: UsuarioService) {}

    transform(usuario: Usuario): string {
        if (usuario && usuario.img && usuario.img.length > 0) {
            return URL_UPLOAD + '/' + usuario.img + this._usuario.getToken();
        }
        return 'assets/images/profile.png';
    }

}
