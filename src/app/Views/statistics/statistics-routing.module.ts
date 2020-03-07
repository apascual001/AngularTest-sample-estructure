import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
/* own */
import { StatisticsViewComponent } from './statistics-view/statistics-view.component';
import { StadisticsComponent } from './stadistics/stadistics.component';


const routes: Routes = [
  { path: 'statistics-view',  component: StatisticsViewComponent },
  { path: 'stadistics',  component: StadisticsComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatisticsRoutingModule { }
