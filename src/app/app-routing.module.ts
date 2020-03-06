import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';

//import {ClassroomModule } from './Views/classroom/classroom.module';


const routes: Routes = [
  {
    path:'header',
    component:HeaderComponent
  },
  {
    path:'footer',
    component:FooterComponent
  }
]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
