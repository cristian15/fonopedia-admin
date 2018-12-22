import { Routes, RouterModule } from "@angular/router";
import { InicioComponent } from "./inicio/inicio.component";
import { PatologiasComponent } from "./patologias/patologias.component";
import { SubcritosComponent } from "./subcritos/subcritos.component";
import { AuthGuardService as AuthGuard } from '../autenticacion/services/auth-guard.service';

const administradorRouting: Routes = [
        {
            path: 'inicio',
            component: InicioComponent,
            data: { title: 'Inicio' }
          },
        {
            path: 'patologias',
            component: PatologiasComponent,
            canActivate: [AuthGuard],
            data: { title: 'Patologias' }
        },
        {
            path: 'subcritos',
            component: SubcritosComponent,
            canActivate: [AuthGuard],
            data: { title: 'Subcritos' }
        }
        
];


export const ADMIN_ROUTES = RouterModule.forChild( administradorRouting );