import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ReviewsComponent } from './pages/reviews/reviews.component';
import { ContactComponent } from './pages/contact/contact.component';
import { VideosComponent } from './pages/videos/videos.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { ScheduleComponent } from './pages/schedule/schedule.component';


const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"reviews",component:ReviewsComponent},
  {path:"contact",component:ContactComponent},
  {path:"videos",component:VideosComponent},
  {path:"courses",component:CoursesComponent},
  {path:"schedule",component:ScheduleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
