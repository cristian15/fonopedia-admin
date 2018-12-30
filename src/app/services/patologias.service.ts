import { Injectable } from '@angular/core';
import { Patologia } from '../models/patologia.model';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../config/config';

import swal from 'sweetalert2';
import { UploadService, UsuarioService } from './service.index';

@Injectable({
  providedIn: 'root'
})
export class PatologiasService {

  constructor(private http: HttpClient, private _uploadService: UploadService, private _usuarioService: UsuarioService) { }


  editPatologia(id, patologia: Patologia, fotos?: File[]) {
    if(fotos){
        this._uploadService.subirVariosArchivosRuta(fotos,'patologias',id).subscribe(res => {
            let respuesta = <any>{};
            respuesta = res;
            for(let f of respuesta.archivos){
                patologia.fotos.push('patologias/'+id+'/'+f);
            }
            this.editPatologia(patologia._id,patologia).subscribe();
        });
    } 
    return this.http.put(URL_SERVICIOS + '/patologias/' + id + this._usuarioService.getToken(), patologia)
        .map(() => {
         // swal('Patologia Actualizada!', '' , 'success');
        });
}

getPatologias() {
    return this.http.get<Patologia[]>(URL_SERVICIOS + '/patologias' )
        .map(res => res);
}

getPatologia(id) {
    return this.http.get<Patologia>(URL_SERVICIOS + '/patologias/' + id)
        .map(res => res);
}

delete(id) {
    return this.http.delete<Patologia>(URL_SERVICIOS + '/patologias/'+id + this._usuarioService.getToken())
        .map(res => res);
}

addPatologia(newPatologia: Patologia, fotos?: File[] ) {

    return this.http.post(URL_SERVICIOS + '/patologias/' + this._usuarioService.getToken(), newPatologia)
        .map((res: Patologia) => {
            let rep = <any>{};
            rep = res;
            rep._id=res._id;
            if(fotos){
                this._uploadService.subirVariosArchivos(fotos).subscribe(res => {
                    let respuesta = <any>{};
                    respuesta = res;
                    for(let f of respuesta.archivos){
                        rep.fotos.push(f);
                    }
                    this.editPatologia(rep._id, rep).subscribe();  
                });
            } 
            swal('Patologia Creada!', '' , 'success');
        });
}



}
