import { Injectable } from '@angular/core';
import { URL_MAIL } from '../../config/config';
import { HttpClient } from '../../../../node_modules/@angular/common/http';
import { UsuarioService } from '../service.index';
import swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient, private _usuarioService: UsuarioService) { }

  enviaEmail(email){
    return this.http.post(URL_MAIL + this._usuarioService.getToken(), email)
          .map((res: Response) => {
             /*  swal('Mail enviado','','success'); */
          });
  }
}
