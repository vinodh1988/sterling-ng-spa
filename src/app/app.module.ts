import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClient ,HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenubarComponent } from './common/menubar/menubar.component';
import { HomeComponent } from './pages/home/home.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { VideosComponent } from './pages/videos/videos.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ReviewsComponent } from './pages/reviews/reviews.component';
import { ScheduleComponent } from './pages/schedule/schedule.component';
import { ContactService } from './services/contact.service';
import { ContactboxComponent } from './pages/contact/contactbox/contactbox.component';
import { CourseComponent } from './pages/home/course/course.component';

@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    HomeComponent,
    CoursesComponent,
    VideosComponent,
    ContactComponent,
    ReviewsComponent,
    ScheduleComponent,
    ContactboxComponent,
    CourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
