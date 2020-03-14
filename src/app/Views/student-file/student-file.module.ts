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
import { AlumnoService } from '../../Services/alumno.service';
import { ExerciseService } from '../../Services/exercise.service';
import { Select2Module } from 'ng2-select2';
import { FormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';


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
    FormsModule,
    BsDatepickerModule.forRoot(),
    StudentFileRoutingModule
  ],
  providers: [
    StudentSearchService,
    AlumnoService,
    ExerciseService
  ]
})
export class StudentFileModule { }
