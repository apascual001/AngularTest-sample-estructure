import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatisticsRoutingModule } from './statistics-routing.module';
import { StatisticsViewComponent } from './statistics-view/statistics-view.component';
import { StadisticsComponent } from './stadistics/stadistics.component';


@NgModule({
  declarations: [StatisticsViewComponent,StadisticsComponent],
  imports: [
    CommonModule,
    StatisticsRoutingModule,
  ]
})
export class StatisticsModule { }
