import {Pipe, PipeTransform} from '@angular/core';
import {URL_UPLOAD} from '../config/config';
import {UsuarioService} from '../services/usuario/usuario.service';

@Pipe({
    name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

    constructor(private _usuario: UsuarioService) {}

    transform(nombreArchivo): string {
        if(!nombreArchivo){
            return URL_UPLOAD + '/nofoto.png'  + this._usuario.getToken(); 
        }
        return URL_UPLOAD + '/' + nombreArchivo + this._usuario.getToken();
    }

}
