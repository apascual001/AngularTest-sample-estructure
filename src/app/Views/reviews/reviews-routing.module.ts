import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
/* own */
import { ReviewsViewComponent } from './reviews-view/reviews-view.component';
import {RevisionComponent} from './revision/revision.component';

const routes: Routes = [
  { path: 'reviews-view',  component: ReviewsViewComponent },
  { path: 'revision',  component: RevisionComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReviewsRoutingModule { }
