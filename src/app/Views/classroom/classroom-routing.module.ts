import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ClassroomViewComponent} from './classroom-view/classroom-view.component';

const classrommRoutes: Routes = [
  { path: 'classroom-view',  component: ClassroomViewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(classrommRoutes)],
  exports: [RouterModule]
})
export class ClassroomRoutingModule { }
