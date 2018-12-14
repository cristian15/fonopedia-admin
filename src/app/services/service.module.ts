import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { UsuarioService } from './service.index';


@NgModule({
    imports: [
        HttpClientModule
    ],
    providers: [
        UsuarioService
    ],
    declarations: []
})
export class ServiceModule {
}
