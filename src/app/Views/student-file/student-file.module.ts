import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* components & modules */
import { StudentFileRoutingModule } from './student-file-routing.module';
import { StudentFileViewComponent } from './student-file-view/student-file-view.component'
import { ExercisesComponent } from './exercises/exercises.component';
import { ExerciseModalComponent } from './exercise-modal/exercise-modal.component';
import { FileStudentComponent } from './file-student/file-student.component';
import { StudentSearchComponent } from './student-search/student-search.component';
import { TablesComponent } from './tables/tables.component';
import { TimeBarComponent } from './time-bar/time-bar.component';

@NgModule({
  declarations: [ 
    StudentFileViewComponent,
    ExercisesComponent,
    ExerciseModalComponent,
    FileStudentComponent,
    StudentSearchComponent,
    TablesComponent,
    TimeBarComponent
  ],
  imports: [
    CommonModule,
    StudentFileRoutingModule
  ]
})
export class StudentFileModule { }
