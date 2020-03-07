import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClassroomRoutingModule } from './classroom-routing.module';
import { ClassroomViewComponent } from './classroom-view/classroom-view.component';
import { ClassroomSeatsComponent } from './classroom-seats/classroom-seats.component';
import { StudentPositionComponent } from './student-position/student-position.component';

// graficos
import { ChartsModule } from 'ng2-charts';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { StudentPopupComponent } from './student-popup/student-popup.component';

@NgModule({
  declarations: [ClassroomViewComponent, ClassroomSeatsComponent, StudentPositionComponent, StudentPopupComponent],
  imports: [
    CommonModule,
    ChartsModule,
    TooltipModule.forRoot(),
    NgCircleProgressModule.forRoot({radius: 20, showBackground: true}),
    ClassroomRoutingModule
  ]
})
export class ClassroomModule { }
