import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { LoginComponent } from './Views/login/login/login.component';
import { ResetPasswordRequestComponent } from './Views/login/reset-password-request/reset-password-request.component';

//import {ClassroomModule } from './Views/classroom/classroom.module';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'login/reset-password', component: ResetPasswordRequestComponent },
  {
    path:'header',
    component:HeaderComponent
  },
  {
    path:'footer',
    component:FooterComponent
  },
  { path: '**', pathMatch: 'full', redirectTo: 'login' }
]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
