import {Injectable} from '@angular/core';
import {Usuario} from '../../models/usuario.model';
import {HttpClient} from '@angular/common/http';
import {URL_USUARIOS, URL_SERVICIOS} from '../../config/config';
import swal from 'sweetalert2';
import {Router} from '@angular/router';

import 'rxjs/add/operator/map';
/* import { url } from 'inspector'; */

@Injectable({providedIn: 'root'})
export class UsuarioService {

    usuario: Usuario;
    token = '';


    private url = URL_SERVICIOS + '/login';

    constructor(public http: HttpClient, public router: Router) {
        this.cargarStorage();
    }

    obtenerUsuarios() {
        return this.http.get(URL_USUARIOS + this.getToken()).map((res: any) => res.usuarios);
    }

    editarUsuario(usuario: Usuario) {
        return this.http.put(URL_USUARIOS + this.getToken(), usuario).map((res: any) => res.usuario);
    }
    eliminarUsuario(usuario: Usuario) {
        return this.http.delete(URL_USUARIOS+'/'+usuario._id + this.getToken()).map((res: any) => res.usuario);
    }

    crearUsuario(usuario: Usuario) {
        return this.http.post(URL_USUARIOS+ this.getToken(), usuario).map((res: any) => {
            swal('Usuario Creado', `Bienvenido ${res.usuario.nombre}`, 'success');
            return res.usuario;
        });
    }

    actualizarUsuario(usuario: Usuario) {
        return this.http.put(URL_USUARIOS + '/' + usuario._id + this.getToken(), usuario);
    }

    cargarStorage() {
        this.token = localStorage.getItem('token') || '';
        this.usuario = JSON.parse(localStorage.getItem('usuario')) || null;
    }


    guardarStorage() {
        localStorage.setItem('token', this.token);
        localStorage.setItem('usuario', JSON.stringify(this.usuario));
    }

    login(usuario: Usuario, recuerdame: boolean = false): Promise<void> {
        console.log(this.url);
        if (recuerdame) {
            localStorage.setItem('email', usuario.email);
        } else {
            localStorage.removeItem('email');
        }
        return new Promise((resolve => {
            return this.http.post(this.url, usuario).subscribe((res: any) => {
                localStorage.setItem('id', res.id);
                localStorage.setItem('token', res.token);
                localStorage.setItem('usuario', JSON.stringify(res.usuario));
                this.usuario = res.usuario;
                this.token = res.token;
                resolve();
            }, (res: any) => {
                swal('Error al ingresar', res.error.mensaje, 'error');
            });
        }));
    }

    logout() {
        
        this.token = '';
        this.usuario = null;
        localStorage.removeItem('token');
        localStorage.removeItem('usuario');
        this.router.navigate(['/login']);
    }

    estaLogueado() {
        return this.token.length > 20;
    }

    getToken() {
        return '?token=' + this.token;
    }

    isAdmin() {
        return this.usuario.role === 'ADMIN_ROLE';
    }


/* 
    isAdminMaquinaria() {
        return this.getEmpresaRoles().includes('ADMIN_MAQUINARIA') || this.isAdminEmpresa();
    }

    isAdminVentasNuevos() {
        return this.getEmpresaRoles().includes('ADMIN_VENTAS-NUEVOS') || this.isAdminEmpresa();
    }

    isAdminVentasUsados() {
        return this.getEmpresaRoles().includes('ADMIN_VENTAS-USADOS') || this.isAdminEmpresa();
    }
 */
}
