import { Routes } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
// import { AuthGuard } from '../shared/guards/auth.guard';
import { Error404Component } from './pages/error404/error404.component';
import { Error500Component } from './pages/error500/error500.component';
import { LockComponent } from './pages/lock/lock.component';
import { LoginComponent } from './pages/login/login.component';
import { MaintenanceComponent } from './pages/maintenance/maintenance.component';
import { RecoverComponent } from './pages/recover/recover.component';
import { RegisterComponent } from './pages/register/register.component';

export const routes: Routes = [

    {
        path: '',
        component: LayoutComponent,
        // canActivate: [AuthGuard],
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }
        ]
    },
    // {
    //     path: 'auth', children: [{ path: '', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) }]
    // }
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'recover', component: RecoverComponent },
    { path: 'lock', component: LockComponent },
    { path: 'maintenance', component: MaintenanceComponent },
    { path: '404', component: Error404Component },
    { path: '500', component: Error500Component },
    // Not found
    { path: '**', redirectTo: '404' }

];
