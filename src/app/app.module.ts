import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { APP_ROUTING } from './app-routing.module';
//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentFileModule } from './Views/student-file/student-file.module';
import { StatisticsModule } from './Views/statistics/statistics.module';
import { ReviewsModule } from './Views/reviews/reviews.module';
import { ClassroomModule } from './Views/classroom/classroom.module';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { LayoutComponent } from './Components/layout/layout.component';
import { LoginModule } from './Views/login/login.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoimagePipe } from './Pipes/noimage.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    NoimagePipe
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    StudentFileModule,
    StatisticsModule,
    ReviewsModule,
    ClassroomModule,
    LoginModule,
    BrowserAnimationsModule,
    //AppRoutingModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
