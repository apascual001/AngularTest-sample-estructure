import { Routes, RouterModule } from '@angular/router';

import { StatisticsViewComponent } from 'src/app/Views/statistics/statistics-view/statistics-view.component';
import { StudentFileViewComponent } from 'src/app/Views/student-file/student-file-view/student-file-view.component';
import { ClassroomViewComponent } from 'src/app/Views/classroom/classroom-view/classroom-view.component';
import { ReviewsViewComponent } from 'src/app/Views/reviews/reviews-view/reviews-view.component';

export const LAYOUT_ROUTES: Routes = [
  { path: 'statistics', component: StatisticsViewComponent },
  { path: 'student', component: StudentFileViewComponent },
  { path: 'student/:id', component: StudentFileViewComponent },
  { path: 'classroom', component: ClassroomViewComponent },
  { path: 'reviews', component: ReviewsViewComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'login' }
];