import { Routes } from '@angular/router'

export const appRoutes: Routes = [
    { path: '', redirectTo: '', pathMatch: 'full' },
    { path: 'login', loadChildren: './login/login.module#LoginModule' },
    { path: 'aggrid', loadChildren: './aggrid/aggrid.module#AggridModule' }
]