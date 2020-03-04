import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PepinoComponent } from './pepino/pepino.component';



@NgModule({
  declarations: [PepinoComponent],
  imports: [
    CommonModule
  ],
  exports: [
    PepinoComponent
  ]
})
export class Classroom2Module { }
