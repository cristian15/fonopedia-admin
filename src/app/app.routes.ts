import { Routes, CanActivate } from '@angular/router';
import { AuthGuardService as AuthGuard } from './autenticacion/services/auth-guard.service';
import { LoginComponent } from './autenticacion/login/login.component';
import { InicioComponent } from './administrador/inicio/inicio.component';

export const appRoutes: Routes = [
    {path: '', component: InicioComponent,  canActivate:[AuthGuard] },
    { path: 'login', component: LoginComponent },
    { 
        path: 'inicio',
        component: InicioComponent,
        canActivate: [AuthGuard] 
    },
    { path: '**', redirectTo: '' }
];