import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioService } from './service.index';
import { URL_SERVICIOS } from '../config/config';
import { Subscrito } from '../models/subscrito.model';

@Injectable({
  providedIn: 'root'
})
export class SubscritosService {

  constructor(private http: HttpClient, private _usuarioService: UsuarioService) { }


  getSubscritos() {
    return this.http.get<Subscrito[]>(URL_SERVICIOS + '/subcritos' )
        .map(res => res);
  }


  delete(id) {
    return this.http.delete<Subscrito>(URL_SERVICIOS + '/subcritos/'+id + this._usuarioService.getToken())
        .map(res => res);
}

  
}
