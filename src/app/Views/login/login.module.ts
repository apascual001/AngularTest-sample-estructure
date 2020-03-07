import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormBuilder,FormGroup,FormsModule,Validators} from '@angular/forms';


import { LoginRoutingModule } from './login-routing.module';
import {LoginComponent} from './login/login.component'
import {NewPasswordResetComponent} from './new-password-reset/new-password-reset.component';
import {ResetPasswordRequestComponent} from './reset-password-request/reset-password-request.component';

@NgModule({
  declarations: [LoginComponent,NewPasswordResetComponent,ResetPasswordRequestComponent],
  imports: [
    CommonModule,
    FormBuilder,FormGroup,FormsModule,Validators,
    LoginRoutingModule
  ]
})
export class LoginModule { }
