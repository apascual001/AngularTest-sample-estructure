import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
/* own */
import { StadisticsComponent } from './stadistics/stadistics.component';


const routes: Routes = [
  { path: 'stadistics',  component: StadisticsComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatisticsRoutingModule { }
