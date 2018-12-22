import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/service.index';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _usuarioService: UsuarioService) { }

  ngOnInit() {
  }

  logout(){
    this._usuarioService.logout();
  }

}
