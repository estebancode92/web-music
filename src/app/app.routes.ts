import { RouterModule, Routes } from '@angular/router';
import { EnvivoComponent } from './pages/envivo/envivo.component';
import { HomeComponent } from './pages/home/home.component';
import { OnlineComponent } from './pages/online/online.component';
import { PresencialesComponent } from './pages/presenciales/presenciales.component';
import { AcercaComponent } from './pages/acerca/acerca.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'presentacionesenvivo', component: EnvivoComponent },
    { path: 'clasesonline', component: OnlineComponent },
    { path: 'clasespresenciales', component: PresencialesComponent },
    { path: 'acerca', component: AcercaComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' },
];


export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
