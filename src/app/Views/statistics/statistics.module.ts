import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatisticsRoutingModule } from './statistics-routing.module';
import { StatisticsViewComponent } from './statistics-view/statistics-view.component';
import { StadisticsComponent } from './stadistics/stadistics.component';
import { PeoplepieComponent } from './stadistics/peoplepie/peoplepie.component';
import { ChartsModule } from 'ng2-charts';
import { GenrepieComponent } from './stadistics/genrepie/genrepie.component';
import {TablesComponent} from './tables/tables.component'

@NgModule({
  declarations: [StatisticsViewComponent, StadisticsComponent, PeoplepieComponent, GenrepieComponent,TablesComponent],
  imports: [
    CommonModule,
    ChartsModule,
    StatisticsRoutingModule,
  ]
})
export class StatisticsModule { }
