import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,  ReactiveFormsModule} from '@angular/forms';
import {HttpClient ,HttpClientModule} from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
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
import { DiscountPipe } from './pipes/discount.pipe';
import { FiltercoursePipe } from './pipes/filtercourse.pipe';
import { ReviewComponent } from './pages/reviews/review/review.component';
import { PriceDirective } from './directives/price.directive';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

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
    CourseComponent,
    DiscountPipe,
    FiltercoursePipe,
    ReviewComponent,
    PriceDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: (createTranslateLoader),
          deps: [HttpClient]
      }
  })
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
