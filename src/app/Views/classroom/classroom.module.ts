import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClassroomRoutingModule } from './classroom-routing.module';
import { ClassroomViewComponent } from './classroom-view/classroom-view.component';
import { ClassroomSeatsComponent } from './classroom-seats/classroom-seats.component';


@NgModule({
  declarations: [ClassroomViewComponent, ClassroomSeatsComponent],
  imports: [
    CommonModule,
    ClassroomRoutingModule
  ]
})
export class ClassroomModule { }
