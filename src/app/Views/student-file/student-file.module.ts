import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* components & modules */
import { StudentFileRoutingModule } from './student-file-routing.module';
import { StudentComponent} from './student/student.component'

@NgModule({
  declarations: [StudentComponent],
  imports: [
    CommonModule,
    StudentFileRoutingModule
  ]
})
export class StudentFileModule { }
