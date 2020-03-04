import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassroomViewComponent } from './classroom-view/classroom-view.component';
import { SchedureRoomComponent } from './schedure-room/schedure-room.component';



@NgModule({
  declarations: [ClassroomViewComponent, SchedureRoomComponent],
  imports: [
    CommonModule
  ]
})
export class ClassroomModule { }
