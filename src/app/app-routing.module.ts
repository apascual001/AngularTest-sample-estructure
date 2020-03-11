//import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import { ResetPasswordRequestComponent } from './Views/login/';
//import { LoginComponent } from './Views/login/';

import { LayoutComponent } from './Components/layout/layout.component';
import { LAYOUT_ROUTES } from './Components/layout/layout.routing';


const APP_ROUTES: Routes = [
  //{ path: 'login', component: LoginComponent },
  //{ path: 'login/reset-password', component: ResetPasswordRequestComponent },
  {
    path: 'layout',
    component: LayoutComponent,
    children: LAYOUT_ROUTES
  },
  //{ path: '**', pathMatch: 'full', redirectTo: 'login' }

];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
