import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core'
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ChartsModule } from 'ng2-charts';

/* modules  */
import { StudentFileModule } from './Views/student-file/student-file.module';
import { StatisticsModule } from './Views/statistics/statistics.module';
import { ReviewsModule } from './Views/reviews/reviews.module';
import { ClassroomModule } from './Views/classroom/classroom.module';
/* components */
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { LayoutComponent } from './Components/layout/layout.component';
import { LoginModule } from './Views/login/login.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LayoutComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ChartsModule,
    FontAwesomeModule,
    StudentFileModule,
    StatisticsModule,
    ReactiveFormsModule,
    ReviewsModule,
    ClassroomModule,
    LoginModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
