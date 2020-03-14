import { Component, OnInit } from '@angular/core';
/* services */
import { ExerciseService } from '../../../Services/exercise.service';
import { StudentSearchService } from '../../../Services/student-search.service';
/* ? */
//import { StudentSearchComponent} from './student-search/student-search.component';// ?
//import { Exercise } from './tables/model/exercise'; //?

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {


  constructor(private exerciseService: ExerciseService, private search: StudentSearchService) {
    search.page = 'student';
  }

  ngOnInit() {
  }

}
