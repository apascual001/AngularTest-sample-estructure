import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { ToastComponentComponent } from './Components/toast-component/toast-component.component';
import { Classroom2Module } from './Views/classroom2/classroom2.module';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ToastComponentComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Classroom2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
