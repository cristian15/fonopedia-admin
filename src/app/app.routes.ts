import { Routes, CanActivate } from '@angular/router';
import { AuthGuardService as AuthGuard } from './autenticacion/services/auth-guard.service';
import { LoginComponent } from './autenticacion/login/login.component';
import { InicioComponent } from './administrador/inicio/inicio.component';
import { AdministradorModule } from './administrador/administrador.module';
import { SubcritosComponent } from './administrador/subcritos/subcritos.component';

export const appRoutes: Routes = [
    {path: '', component: InicioComponent,  canActivate:[AuthGuard] },
    { path: 'login', component: LoginComponent },
    
    {path: 'patologias', loadChildren: './administrador/administrador.module#AdministradorModule'/*  loadChildren:()=> AdministradorModule  */},
    {path: 'subcritos',  loadChildren: './administrador/administrador.module#AdministradorModule' /* loadChildren:()=> AdministradorModule  */},
    { 
        path: 'home',
        component: InicioComponent,
        canActivate: [AuthGuard] 
    },
    { path: '**', redirectTo: '' }
];