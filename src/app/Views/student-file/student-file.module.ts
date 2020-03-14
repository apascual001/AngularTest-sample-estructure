import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* components & modules */
import { StudentFileRoutingModule } from './student-file-routing.module';
import { StudentComponent} from './student/student.component';
import { StudentSearchComponent} from './student/student-search/student-search.component';
import { FileStudentComponent } from './student/file-student/file-student.component';
import { ExerciseModalComponent } from './student/exercise-modal/exercise-modal.component';
import { ExercisesComponent } from './student/exercises/exercises.component';
import { TablesComponent } from './student/tables/tables.component';
import { TimeBarComponent } from './student/time-bar/time-bar.component';

/* services*/
import { StudentSearchService } from '../../Services/student-search.service';
import { Select2Module } from 'ng2-select2';

@NgModule({
  declarations: [
    StudentComponent,
    StudentSearchComponent,
    FileStudentComponent,
    ExerciseModalComponent,
    ExercisesComponent,
    TablesComponent,
    TimeBarComponent
  ],
  imports: [
    CommonModule,
    Select2Module,
    StudentFileRoutingModule
  ],
  providers: [
    StudentSearchService
  ]
})
export class StudentFileModule { }
