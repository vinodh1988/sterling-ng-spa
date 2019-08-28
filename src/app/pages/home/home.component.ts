import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';
import { course } from 'src/app/model/course';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
courses:course[]=[];
range:string="All";
  constructor(private cs:CourseService) { 

    /*  this.cs.getCourses().subscribe(
        function(data:course[]){
            this.courses=data;
        }.bind(this),
        function(){

        }
      )*/
      this.cs.getCourses().subscribe(
         (data:course[])=>this.courses=data,
         ()=>this.courses=[]
      )
  }

  ngOnInit() {
  }

}
